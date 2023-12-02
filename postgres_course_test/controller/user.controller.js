const db = require('../db')
const uuid = require('uuid');
const nodemailer = require('nodemailer');
const mailjetTransport = require('nodemailer-mailjet-transport');

class UserConroller{

    //admin

    //group

    async createGroup(req, res){
        const { name_group, available_lessons } = req.body;
        const newGroup = await db.query('INSERT INTO groups (name_group, available_lessons) VALUES ($1, $2) RETURNING *', [name_group, available_lessons])
        res.json(newGroup.rows)
    }
    
    async deleteGroup(req, res){
        const { group_id } = req.body;
        const group = await db.query('DELETE FROM groups WHERE id = $1', [group_id])
        res.json(`Group deleted ${group_id}`)
    }

    async updateGroupLesson(req, res){
        const {id, available_lessons} = req.body
        const group = await db.query('UPDATE groups set available_lessons = $1 WHERE id = $2 RETURNING *', [available_lessons, id])
        res.json(group.rows[0]);
    }

    async getGroup(req, res){
        const group = await db.query('SELECT * FROM groups')
        res.json(group.rows)
    }

    async getOneGroup(req, res){
        const group_id = req.params.group_id
        const group = await db.query('SELECT * FROM groups WHERE id = $1', [group_id]);
        res.json(group.rows[0])
    }

    async addUserToGroup(req, res){
        const {user_id, group_id} = req.body
        const groupPush = await db.query('INSERT INTO user_groups(user_id, group_id) VALUES($1, $2)', [user_id, group_id]);
        res.json('Успішно додано до групи')
    }

    async getUsersGroups(req, res) {
        const id = req.params.id;
    
        try {
            const userGroups = await db.query(
                'SELECT user_groups.*, groups.name_group, groups.available_lessons FROM user_groups JOIN groups ON user_groups.group_id = groups.id WHERE user_id = $1',
                [id]
            );
    
            res.json(userGroups.rows);
        } catch (error) {
            console.error('Помилка при отриманні груп користувача:', error);
            res.status(500).json({ error: 'Помилка сервера' });
        }
    }

    async updateUserAdmin(req, res) {
        const { id, name, surname, role, email, phone } = req.body;
    
        let updateFields = [];
        let values = [];
        let paramCount = 1; // Початковий лічильник параметрів
    
        function addUpdateField(fieldName, value) {
            if (value !== undefined) {
                updateFields.push(`${fieldName} = $${paramCount}`);
                values.push(value);
                paramCount++;
            }
        }
    
        addUpdateField('name', name);
        addUpdateField('surname', surname);
        addUpdateField('role', role);
        addUpdateField('email', email);
        addUpdateField('phone', phone);
    
        if (values.length === 0) {
            return res.status(400).json({ error: "No fields provided for update" });
        }
    
        values.push(id); // id завжди обов'язкове
    
        const updateQuery = `UPDATE users SET ${updateFields.join(', ')} WHERE id = $${paramCount}`;
        const selectQuery = 'SELECT id, name, surname, role, email, token, phone FROM users WHERE id = $1';
    
        try {
            // Виконуємо запит на оновлення
            await db.query(updateQuery, values);
    
            // Виконуємо запит для отримання оновленого користувача
            const updatedUser = await db.query(selectQuery, [id]);
    
            res.json(updatedUser.rows[0]);
        } catch (error) {
            console.error("Error updating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }


    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json('User deleted');
    }

    async getAllUser(req, res){
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows[0])
    }

    

    //teacher
    async getGroupMembers(req, res){
        const group_id = req.params.group_id
        const group = await db.query('SELECT * FROM users WHERE group_id = $1', [group_id]);
        res.json(group.rows[0]);
    }

    
    //user auth

    async createUser(req, res) {
        const { name, surname,  email, password, role } = req.body;
    
        try {
            // Перевірка, чи email вже існує в базі даних
            const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    
            if (existingUser.rows.length > 0) {
                res.status(400).json({ error: 'Email already exists' });
            } else {
                const token = uuid.v4(); // Генерація токена
    
                const user = await db.query(`
                    INSERT INTO users (name, surname,  email,  password, token, role)
                    VALUES ($1, $2, $3, $4, $5, $6 )
                    RETURNING *
                `, [name, surname, email, password, token, role]);
    
                res.json({token: user.rows[0].token});
            }
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await db.query('SELECT * FROM users WHERE email = $1', [email]);
            if (user.rows.length > 0 && user.rows[0].password === password) {
                res.json({ message: 'Login successful', token: user.rows[0].token });
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async autoLogin(req, res) {
        const { token } = req.body;
    
        try {
            const userIdResult = await db.query('SELECT id FROM users WHERE token = $1', [token]);
    
            // Перевірка, чи є результати запиту
            if (userIdResult.rows.length === 0) {
                return res.status(401).json({ error: 'Invalid token' });
            }
    
            const userId = userIdResult.rows[0].id;
    
            const newToken = uuid.v4();
    
            await db.query('UPDATE users SET token = $1 WHERE id = $2', [newToken, userId]);
    
            const user = await db.query('SELECT id, name, surname, role, email, token, phone FROM users WHERE id = $1', [userId]);
            res.json(user.rows[0]);
        } catch (error) {
            console.error("Error during auto login:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }




    async forgotPassword(req, res){
        const { email } = req.body
    
        try {
            const userId = await db.query('SELECT id FROM users WHERE email = $1', [email]);

            if(userId.rows.length > 0){

                const transporter = nodemailer.createTransport({ 
                    host: 'smtp-mail.outlook.com', 
                    auth: {
                        user: "fourmin-it@outlook.com",
                        pass: "19911991.Ukraine"
                    },
                    secure: false, 
                    requireTLS: true,
                });

                // const transporter = nodemailer.createTransport({
                //     host: 'smtp.ethereal.email',
                //     port: 587,
                //     auth: {
                //         user: 'ricardo.christiansen78@ethereal.email',
                //         pass: 'Up8eZQmtqzaqPWcZKa'
                //     }
                // });
        


                const randomCode = Math.floor(1000000000 + Math.random() * 9000000000);

                // const mailOptions = {
                //     from: '4min-IT',
                //     to: `${email}`,
                //     subject: 'Код для скидання пароля лмс 4min-IT',
                //     text: `${email} Ваш код для скидання: ${randomCode} .`
                // };

                const mailOptions = {
                    from: 'fourmin-it@outlook.com',
                    to: `${email}`,
                    subject: 'Код для скидання пароля лмс 4min-IT',
                    text: `${email} Ваш код для скидання: ${randomCode} .`,
                    html: `<p>${email} Ваш код для скидання: <strong>${randomCode}</strong>.</p>`
                };


                
                transporter.sendMail(mailOptions, (error, info) => {

                    if (error) {
                            console.error('Помилка відправки листа:', error);
                            res.json('Помилка відправки листа:', error);
                    } else {
                        console.log('Лист відправлено:', info.response);
                

                        const codePush = db.query(
                            'INSERT INTO password_resets(user_id, reset_token) VALUES ($1, $2)',
                            [userId.rows[0].id, randomCode]
                        );

                        res.json('Лист відправлено');
                    }
                });


            } else {
                console.log("Користувача з таким email не знайдено")
            }
        } catch (error) {
            console.error("Помилка:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }

    }



}

module.exports = new UserConroller()
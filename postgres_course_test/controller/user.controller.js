const db = require('../db')
const uuid = require('uuid');

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
        const {group_id} = req.body
        const group = await db.query('SELECT * FROM groups WHERE id = $1', [group_id]);
        res.json(group.rows[0])
    }


    async updateUserAdmin(req, res) {
        const { id, name, surname, role, email, group_id, password } = req.body;
    
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
        addUpdateField('group_id', group_id);
        addUpdateField('password', password);
    
        if (values.length === 0) {
            return res.status(400).json({ error: "No fields provided for update" });
        }
    
        values.push(id); // id завжди обов'язкове
    
        const query = `UPDATE users SET ${updateFields.join(', ')} WHERE id = $${paramCount} RETURNING *`;
    
        try {
            const user = await db.query(query, values);
            res.json(user.rows[0]);
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
        const { name, surname, role, email, group_id, password } = req.body;
    
        try {
            // Перевірка, чи email вже існує в базі даних
            const existingUser = await db.query('SELECT * FROM users WHERE email = $1', [email]);
    
            if (existingUser.rows.length > 0) {
                res.status(400).json({ error: 'Email already exists' });
            } else {
                const token = uuid.v4(); // Генерація токена
    
                const user = await db.query(`
                    INSERT INTO users (name, surname, role, email, group_id, password, token)
                    VALUES ($1, $2, $3, $4, $5, $6, $7)
                    RETURNING *
                `, [name, surname, role, email, group_id, password, token]);
    
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

    // async autoLogin(req, res) {
    //     const { token } = req.body;
    
    //     try {
    //         const userIdResult = await db.query('SELECT id FROM users WHERE token = $1', [token]);
    //         const userId = userIdResult.rows[0].id;
    
    //         const newToken = uuid.v4();
    
    //         await db.query('UPDATE users SET token = $1 WHERE id = $2', [newToken, userId]);
    
    //         const user = await db.query('SELECT id, name, surname, role, email, group_id, token FROM users WHERE id = $1', [userId]);
    //         res.json(user.rows[0]);
    //     } catch (error) {
    //         console.error("Error during auto login:", error);
    //         res.status(500).json({ error: "Internal Server Error" });
    //     }
    // }

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
    
            const user = await db.query('SELECT id, name, surname, role, email, group_id, token FROM users WHERE id = $1', [userId]);
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

}

module.exports = new UserConroller()
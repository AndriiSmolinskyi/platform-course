const db = require('../db')

class PostController{
   
    async sendHomework(req, res){
        const { user_id, group_id, lesson_number, content } = req.body;
        const newHome = await db.query('INSERT INTO homework (user_id, group_id, lesson_number, content) VALUES ($1, $2, $3, $4, $5) RETURNING *', [user_id, group_id, lesson_number, content])
        res.json(newHome.rows)
    }

    async editHomework(req, res) {
        const { id, content } = req.body;
    
        try {
            const updatedHomework = await db.query('UPDATE homework SET content = $1 WHERE id = $2 RETURNING *', [content, id]);
            res.json(updatedHomework.rows[0]);
        } catch (error) {
            console.error("Error updating homework:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }



    async editStatus(req, res){
        const { id, status } = req.body;
        const newStatus = await db.query('UPDATE homework SET status = $1 WHERE id = $2 RETURNING *', [status, id]);
        res.json(newStatus.rows[0])
    }

    async editFeedback(req, res){
        const { id, instructor_feedback } = req.body;
        const feeback = await db.query('UPDATE homework SET instructor_feedback = $1 WHERE id = $2 RETURNING *', [instructor_feedback, id]);
        res.json(feeback.rows[0])
    }

    async getHomeworkByLessonAndGroup(req, res) {
        const { lesson_number, group_id } = req.body;
        const homework = await db.query('SELECT * FROM homework WHERE lesson_number = $1 AND group_id = $2', [lesson_number, group_id]);
        res.json(homework.rows[0]);
    }

    async getHomeworkByUserAndLesson(req, res) {
        const { user_id, lesson_number } = req.body;  
        const homework = await db.query('SELECT * FROM homework WHERE user_id = $1 AND lesson_number = $2', [user_id, lesson_number]);
        res.json(homework.rows[0]);  
    }
}

module.exports = new PostController()


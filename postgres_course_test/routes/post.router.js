const Router = require('express');
const router = new Router();
const PostController = require('../controller/post.controller');

router.post('/user/sendHomework', PostController.sendHomework);
router.put('/user/editHomework', PostController.editHomework);

router.put('/teacher/editFeedback', PostController.editFeedback);
router.put('/teacher/editStatus', PostController.editStatus);
router.post('/teacher/getHomeworkByLessonAndGroup', PostController.getHomeworkByLessonAndGroup);
router.post('/teacher/getHomeworkByUserAndLesson', PostController.getHomeworkByUserAndLesson); 

module.exports = router;
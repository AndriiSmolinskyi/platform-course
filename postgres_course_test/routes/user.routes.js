const Router = require('express');
const router = new Router();
const userController = require('../controller/user.controller');

//admin

router.post('/admin/createGroup', userController.createGroup);
router.delete('/admin/deleteGroup', userController.deleteGroup);
router.put('/admin/updateGroupLesson', userController.updateGroupLesson);
router.get('/admin/getAllGroups', userController.getGroup);
router.get('/admin/getGroupMembers/:group_id', userController.getGroupMembers);

router.put('/admin/updateUserAdmin', userController.updateUserAdmin);
router.get('/admin/getOneUser/:id', userController.getOneUser);
router.delete('/admin/deleteUser/:id', userController.deleteUser);
router.get('/admin/getAllUser', userController.getAllUser);

//teacher
router.get('/teacher/getGroupMembers/:group_id', userController.getGroupMembers);
router.put('/teacher/updateGroupLesson', userController.updateGroupLesson);

//auth

router.post('/user/register', userController.createUser);
router.post('/user/login', userController.loginUser);
router.put('/user/autoLogin', userController.autoLogin);

//user

router.get('/user/getOneUser/:id', userController.getOneUser);
router.put('/user/update', userController.updateUserAdmin);
router.get('/user/getOneGroup/:group_id', userController.getOneGroup);

module.exports = router;
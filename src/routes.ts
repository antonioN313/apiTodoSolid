import { Router } from "express";

const router = Router()

//Tasks
router.post('/task') //As a User, I want to be able to create tasks so that I can keep track of my to-do list efficiently
router.get('/tasks') // As a User, I want to be able to read tasks so that I can see what I need to do
router.put('/task/:id') //As a User, I want to be able to update tasks so that I can edit or change task details when necessary.
router.delete('/task/:id') //As a User, I want to be able to delete tasks so that I can remove tasks I no longer need.
//Categories
router.post('/category')//As a User, I want to be able to create categories so that I can organize my tasks into different categories.
router.get('/categories')//As a User, I want to be able to read categories so that I can see what categories I have created.
router.put('/category/:id')//As a User, I want to be able to update categories so that I can modify category names or details.
router.delete('/category/:id')//As a User, I want to be able to delete categories so that I can remove categories I no longer need.
router.post('/task/:categoriesId')//As a User, I want to be able to add categories to tasks so that I can categorize my tasks for better organization

//Users
router.post('/user')//As an Administrator, I want to be able to create users so that I can grant access to the Todo List system.
router.get('/users')//As an Administrator, I want to be able to view user profiles so that I can review user information and permissions.
router.put('/user/:id')//As a User, I want to be able to update my user profile so that I can modify my personal information when necessary.
router.delete('/user/:id')//As a User, I want to be able to delete my own account so that I can remove my access to the system if needed


export { Router }
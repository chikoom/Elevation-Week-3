const express = require('express')
const router = express.Router()
const ToDoList = require('../model');
const todoList = new ToDoList();

router.get('/todos', function(req, res) {
    res.send(todoList.todos)
})

router.post('/todo', function(req, res) {
    const text = req.body.text
    todoList.addTodo(text);
    res.send(todoList.todos)
})

router.put('/todo/:todoID', function(req, res) {
    const todoID = req.params.todoID
    if (req.query.pr) {
        const prID = req.query.pr
        todoList.getTodoById(todoID).updatePriority(prID)
    } else {
        todoList.getTodoById(todoID).toggleComplete()
    }

    res.send(todoList.todos)
})




router.delete('/todo/:todoID', function(req, res) {
    const todoID = parseInt(req.params.todoID)
    todoList.removeTodo(todoID);
    res.send(todoList.todos)
})

module.exports = router
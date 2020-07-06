let id = 1

class Todo {
    constructor(text) {
        this.id = ++id
        this.text = text
        this.complete = false
        this.priority = 0
    }
    toggleComplete() {
        this.complete = !this.complete
    }
    updatePriority(prNum) {
        this.priority = prNum
    }
}

class TodoList {
    constructor() {
        this.todos = []
    }
    removeTodo(id) {
        this.todos = this.todos.filter(item => item.id !== parseInt(id))
    }
    addTodo(text) {
        this.todos.push(new Todo(text))
    }
    getTodoById(id) {
        return this.todos.find(item => item.id === parseInt(id))
    }
}

module.exports = TodoList;
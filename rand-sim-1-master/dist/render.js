const render = function(todos) {
    $("#todos").empty()
    const source = $("#todo-template").html();
    const template = Handlebars.compile(source);
    const todosHTML = template({ todos });
    $("#todos").append(todosHTML);

    // $("#todos").empty()
    // console.log(todos)
    // todos.forEach(todo => {
    //     $("#todos").append(`
    //     <div data-id=${todo.id} data-pr="${todo.priority}" class="priority-${todo.priority} todo ${todo.complete ? 'complete' : ''}">
    //         <i class="fas fa-check-circle"></i>
    //         <span class="text">${todo.text}</span>
    //         <select class="slcPriority" data-pr="${todo.priority}">
    //             <option value="0">Default</option>
    //             <option value="1">Low</option>
    //             <option value="2">Medium</option>
    //             <option value="3">High</option>
    //         </select>
    //         <span class="delete"><i class="fas fa-trash"></i></span>
    //     </div>
    //     `)
    // })
}
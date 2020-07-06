// BAD PRACTICE - not proper MVC. Should be separated to files.
const add = function() {
    $.post('/todo', { text: $("#todo-input").val() }, function(todos) {
        render(todos)
        $("#todo-input").val("")
    })
}

$("#todos").on("click", ".fa-check-circle", function(event) {
    event.stopPropagation();
    const id = $(this).closest(".todo").data().id
    $.ajax({
        method: "PUT",
        url: "/todo/" + id,
        success: todos => render(todos)
    })
})

$("#todos").on("click", ".fa-trash", function() {
    const id = $(this).closest(".todo").data().id
    $.ajax({
        method: "DELETE",
        url: "/todo/" + id,
        success: todos => render(todos)
    })
})


$("#todos").on("change", ".slcPriority", function() {
    const id = $(this).closest(".todo").data().id
    const prValue = $(this).val()
    $.ajax({
        method: "PUT",
        url: "/todo/" + id + "?pr=" + prValue,
        success: todos => render(todos)
    })
});

$("#todos").on("click", ".todo", function() {
    const id = $(this).closest(".todo").data().id
    let prValue = $(this).data().pr;
    if (parseInt(prValue) === 3) {
        prValue = 1;
    } else prValue++;
    $.ajax({
        method: "PUT",
        url: "/todo/" + id + "?pr=" + prValue,
        success: todos => render(todos)
    })
});

$.get('/todos', todos => render(todos));
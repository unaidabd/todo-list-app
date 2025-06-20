function addtodo(){
    const todoinput =document.getElementById("todo-input");
    const todoText = todoinput.value.trim();
    if (todoText === ""){
        alert("Please enter a todo item.");
        return;
    }
     const li = document.createElement("li");
     li.textContent = todoText;
     li.onclick =function() {
        li.classList.toggle("completed");
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteBtn);
    document.getElementById("todolist").appendChild(li);
    todoinput.value = ""; 
};
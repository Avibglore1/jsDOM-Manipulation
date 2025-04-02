const listContainerEl = document.querySelector("ul");
const inputEl = document.querySelector("input");
const addTaskBtn = document.querySelector('button');

const editFn = function(listEl){
    const editedText = prompt("Enter the edited task");
    listEl.innerText = editedText;
}

const deleteFn = function(li){
    li.remove();
}
const fn = function(){
    const newTask = inputEl.value;
    if(newTask === "") return;
    const listEl = document.createElement('div');
    const li = document.createElement('li');
    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    li.innerText = newTask;
    listEl.appendChild(li);

    editBtn.innerText = "Edit";
    listEl.appendChild(editBtn);
    editBtn.addEventListener('click',function(){
        editFn(li);
    });

    deleteBtn.innerText = "Delete";
    listEl.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",function(){
        deleteFn(listEl);
    })

    listContainerEl.appendChild(listEl);
    inputEl.value = "";
    
    }

addTaskBtn.addEventListener('click',fn);

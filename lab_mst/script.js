let tasks = [];

function addtask(){
    let taskname = document.querySelector("#taskname").value;
    let priority = document.querySelector("#priority").value;

    if(taskname === ""){
        alert("add task ");
        return;
    }

    let task = {
        name : taskname,
        priority : priority,
        completed : false,
    };

    tasks.push(task);

    document.getElementById("taskname").value = "";

    displaytasks(tasks);
}

function displaytasks(arr){
    let list = document.getElementById("tasklist");
    list.innerHTML = "";

    for(let i =0;i<arr.length ; i++){
        let li = document.createElement("li");

        li.innerHTML = 
        "<input type = 'checkbox' onclick='toggletask("+i+")'>"
        + arr[i].name + "(" + arr[i].priority + ")"
        + "<button onclick='deletetask("+ i +")'>Delete</button>";

        if(arr[i].completed){
            li.style.textDecoration = "line-through";
        }
        list.appendChild(li);
    }
}
function toggletask(i){
    tasks[i].completed = !tasks[i].completed;
    displaytasks(tasks);
}
function deletetask(i){
    tasks.splice(i,1);
    displaytasks(tasks);
}
function showall(){
    displaytasks(tasks);
}
function showcompleted(){
    let completed = tasks.filter(t => t.completed);
    displaytasks(completed);
}
function showpending(){
    let pending  = tasks.filter(t => !t.completed);
    displaytasks(pending);
}

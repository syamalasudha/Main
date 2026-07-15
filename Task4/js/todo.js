

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".todo-filters button");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentFilter = "all";



function saveTasks(){

    localStorage.setItem("tasks",JSON.stringify(tasks));

}



function displayTasks(){

    taskList.innerHTML="";

    let filtered = tasks;

    if(currentFilter==="completed"){

        filtered = tasks.filter(task=>task.completed);

    }

    else if(currentFilter==="pending"){

        filtered = tasks.filter(task=>!task.completed);

    }

    filtered.forEach((task,index)=>{

        const li=document.createElement("li");

        li.className=`task ${task.completed ? "completed" : ""}`;

        li.innerHTML=`

        <span>${task.text}</span>

        <div class="task-buttons">

            <button onclick="toggleTask(${index})">

                <i class="fas fa-check"></i>

            </button>

            <button onclick="editTask(${index})">

                <i class="fas fa-pen"></i>

            </button>

            <button onclick="deleteTask(${index})">

                <i class="fas fa-trash"></i>

            </button>

        </div>

        `;

        taskList.appendChild(li);

    });

}



addTaskBtn.addEventListener("click",()=>{

    const value=taskInput.value.trim();

    if(value==="") return;

    tasks.push({

        text:value,

        completed:false

    });

    saveTasks();

    displayTasks();

    taskInput.value="";

});


taskInput.addEventListener("keypress",(e)=>{

    if(e.key==="Enter"){

        addTaskBtn.click();

    }

});



function toggleTask(index){

    tasks[index].completed=!tasks[index].completed;

    saveTasks();

    displayTasks();

}


function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}



function editTask(index){

    const updated=prompt("Edit Task",tasks[index].text);

    if(updated!==null && updated.trim()!==""){

        tasks[index].text=updated.trim();

        saveTasks();

        displayTasks();

    }

}



filterButtons.forEach(btn=>{

    btn.addEventListener("click",()=>{

        currentFilter=btn.dataset.filter;

        filterButtons.forEach(b=>b.classList.remove("active"));

        btn.classList.add("active");

        displayTasks();

    });

});



displayTasks();
var plan=document.getElementById("plan");
var list=document.getElementById("list");
var allTasks=document.getElementById("tasks");
var actions=document.getElementById("actions");


class Task{
	constructor(name,priority,dateEnd){
		this.name=name;
		this.priority=priority;
		this.dateEnd=dateEnd;
	}
}

class TaskPlan{
	constructor(...taskPlan){
		this.taskPlan=taskPlan;
	}
	getTaskForToday(){
		console.log("Список задач на сегодня: ");
		var today=new Date();
		var[yToday,mToday,dToday]=[today.getFullYear(),today.getMonth(),today.getDate()];
		for(var j of this.taskPlan){
			var date=new Date(j.dateEnd);
			var[y,m,d]=[date.getFullYear(),date.getMonth(),date.getDate()];
			if(yToday==y && mToday==m && dToday==d){
				taskOutputActions(j);
				console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
			}
		}
	}
	getTaskForTomorrow(){
		console.log("Список задач на завтра: ");
		var tomorrow=new Date();
		var[yTomorrow,mTomorrow,dTomorrow]=[tomorrow.getFullYear(),tomorrow.getMonth(),tomorrow.getDate()+1];
		for(var j of this.taskPlan){
			var date=new Date(j.dateEnd);
			var[y,m,d]=[date.getFullYear(),date.getMonth(),date.getDate()];
			if(yTomorrow==y && mTomorrow==m && dTomorrow==d){
				taskOutputActions(j);
				console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
			}
		}
	}
	addTaskInPlan(task){
		this.taskPlan.push(task);	
		taskOutputPlan(task);
		console.log("Задача добавлена в план задач.");
	}
	addSeveralTasks(...tasks){
		console.log(`Добавленно ${tasks.length} задач(и).`);
		for(var i=0; i<tasks.length; i++){
			this.taskPlan.push(tasks[i]);
			taskOutputPlan(tasks[i]);
		}
		
	}
	deleteTaskInPlan(task){
		console.log("Выбранная задача удалена из списка плана.");
		this.taskPlan.splice(task, 1);
	}
	listPriority(){
		console.log("Список задач по приоритету: ");
		var buff=0;
		for(var i=0;i<this.taskPlan.length; i++){
			for(var j=0;j<this.taskPlan.length-1; j++){
				if(this.taskPlan[j].priority>this.taskPlan[j+1].priority){
					buff=this.taskPlan[j].priority;
					this.taskPlan[j].priority=this.taskPlan[j+1].priority;
					this.taskPlan[j+1].priority=buff;
				}
			}
		}
		console.log(this.taskPlan);
		for(var j of this.taskPlan){
			console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
			taskOutputActions(j);
		}
	}
	[Symbol.iterator](){
		var self=this;
		console.log(self);
		var iter={
			next(){
				let value=self.taskPlan[self.taskPlan.length-1];
				let done=value>self.taskPlan.length-1;
			}
		}
		return iter;
	}
}

class TaskList{
	constructor(...taskList){
		this.taskList=taskList;
	}
	addTaskInList(task){
		this.taskList.push(task);	
		taskOutputList(task);
		console.log("Задача добавлена в план задач.");
	}
	addSeveralTasksInList(...tasks){
		console.log(`Добавленно ${tasks.length} задач(и).`);
		for(var i=0; i<tasks.length; i++){
			this.taskList.push(tasks[i]);
			taskOutputList(tasks[i]);
		}
		
	}
	deleteTaskInList(task){
		console.log("Выбранная задача удалена из списка задач.");
		this.taskList.splice(task, 1);
	}
}

var arrPlan=new TaskPlan();
var arrList=new TaskList();

function ajaxGet(path){
	var promise=new Promise(function(resolve,reject){
		var xhr = new XMLHttpRequest; 
		xhr.open("GET", path, true); 
		xhr.onload = function(){ 
			resolve(xhr.responseText); 
		} 
		xhr.onerror=function(){
			reject(xhr.responseText);
		}
		xhr.send(null); 
	})
	return promise;
}
ajaxGet("json.json").then(function(text){ 
	var json=JSON.parse(text);
	console.log(json.length);
	var setList=new Set();
	var setPlan=new Set();
	for(var i=0; i<json.length;i++){
		var task=new Task(json[i].name,json[i].priority,json[i].dateEnd);
		if(json[i].dateEnd==null){
			setList.add(task);
		}
		else{
			setPlan.add(task);
		}
	}
	
	arrPlan.addSeveralTasks(...setPlan);
	console.log(arrPlan);
	arrList.addSeveralTasksInList(...setList);
	console.log(arrList);
	
	allTasks.addEventListener("click",function(e){
		if(e.target.getAttribute("class")=="delTaskPlan"){
			arrPlan.deleteTaskInPlan(e.target.getAttribute("id"));
			e.target.parentNode.classList.add("remove");
		}
		if(e.target.getAttribute("class")=="delTaskList"){
			arrList.deleteTaskInList(e.target.getAttribute("id"));
			e.target.parentNode.classList.add("remove");
		}
		if(e.target.getAttribute("id")=="butPlan"){
			let titleP=document.getElementById("titleP");
			let priorityP=document.getElementById("priorityP");
			let dateEndP=document.getElementById("dateEndP");
			let newTask=new Task(titleP.value,priorityP.value,dateEndP.value);
			arrPlan.addTaskInPlan(newTask);
		}
		if(e.target.getAttribute("id")=="butList"){
			let titleL=document.getElementById("titleL");
			let priorityL=document.getElementById("priorityL");
			let newTask=new Task(titleL.value,priorityL.value,null);
			arrList.addTaskInList(newTask);
		}
		if(e.target.getAttribute("id")=="tasksToday"){
			actions.innerHTML="";
			arrPlan.getTaskForToday();
		}
		if(e.target.getAttribute("id")=="tasksTomorrow"){
			actions.innerHTML="";
			arrPlan.getTaskForTomorrow();
		}
		if(e.target.getAttribute("id")=="tasksPriority"){
			actions.innerHTML="";
			arrPlan.listPriority();
		}
	})
},err=>console.error(err));

function taskOutputActions(task){
	let divTask=document.createElement("div");
	divTask.setAttribute("class","divTask");
	actions.appendChild(divTask);
	let title=document.createElement("h3");
	title.innerText=task.name;
	divTask.appendChild(title);
	let prior=document.createElement("h4");
	prior.innerText="Приоритет: "+task.priority;
	divTask.appendChild(prior);
	let end=document.createElement("h5");
	end.innerText=task.dateEnd;
	divTask.appendChild(end);
	let but=document.createElement("button");
	but.setAttribute("class","delTaskPlan");
	but.innerText="Удалить задачу";
	but.setAttribute("id",task);
	divTask.appendChild(but);
}

function taskOutputPlan(task){
	let divTask=document.createElement("div");
	divTask.setAttribute("class","divTask");
	plan.appendChild(divTask);
	let title=document.createElement("h3");
	title.innerText=task.name;
	divTask.appendChild(title);
	let prior=document.createElement("h4");
	prior.innerText="Приоритет: "+task.priority;
	divTask.appendChild(prior);
	let end=document.createElement("h5");
	end.innerText=task.dateEnd;
	divTask.appendChild(end);
	let but=document.createElement("button");
	but.setAttribute("class","delTaskPlan");
	but.innerText="Удалить задачу";
	but.setAttribute("id",task);
	divTask.appendChild(but);
}
function taskOutputList(task){
	let divTask=document.createElement("div");
	divTask.setAttribute("class","divTask");
	list.appendChild(divTask);
	let title=document.createElement("h3");
	title.innerText=task.name;
	divTask.appendChild(title);
	let prior=document.createElement("h4");
	prior.innerText="Приоритет: "+task.priority;
	divTask.appendChild(prior);
	let but=document.createElement("button");
	but.setAttribute("class","delTaskList");
	but.innerText="Удалить задачу";
	but.setAttribute("id",task);
	divTask.appendChild(but);
}
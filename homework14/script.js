class Task{
	constructor(name,priority,dateEnd){
		this.name=name;
		this.priority=priority;
		this.dateEnd=dateEnd;
	}
}

class TaskPlan extends Task{
	constructor(name,priority,dateEnd,taskPlan){
		super(name,priority,dateEnd);
	}
	getTaskForToday(arr){
		console.log("Список задач на сегодня: ");
		var today=new Date();
		var yToday= today.getFullYear();
		var mToday= today.getMonth();
		var dToday= today.getDate();
		var iter = arr[Symbol.iterator]();
		for(var j of arr){
			var date=new Date(j.dateEnd);
			var y=date.getFullYear();
			var m=date.getMonth();
			var d=date.getDate();
			if(yToday==y && mToday==m && dToday==d){
				console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
			}
		}
		console.log(iter.next());
	}
	getTaskForTomorrow(arr){
		console.log("Список задач на завтра: ");
		var tomorrow=new Date();
		var yTomorrow= tomorrow.getFullYear();
		var mTomorrow= tomorrow.getMonth();
		var dTomorrow= tomorrow.getDate()+1;
		var iter = arr[Symbol.iterator]();
		for(var j of arr){
			var date=new Date(j.dateEnd);
			var y=date.getFullYear();
			var m=date.getMonth();
			var d=date.getDate();
			if(yTomorrow==y && mTomorrow==m && dTomorrow==d){
				console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
			}
		}
		console.log(iter.next());
	}
	addTask(name,priority,dateEnd){
		var addTask=new Task(name,priority,dateEnd);
		arr.push(addTask);	
		console.log("Задача добавлена в список задач.");
	}
	addSeveralTasks(...newtasks){
		for(var i=0; i<newtasks.length; i++){
			var addTask=new Task(newtasks[i].name,newtasks[i].priority,newtasks[i].dateEnd);
			arr.push(addTask);
		}
		
	}
	deleteTask(arr){
		console.log("Задача удалена из списка задач.");
		var now=new Date();
		var m=now.getTime();
		var NewArr=arr;
		for(var j=0; j<arr.length;j++){
			var time=new Date(arr[j].dateEnd);
			var mm=time.getTime();
			if(mm<=m){
				NewArr.splice(j, 1);
				j=0;
			}
		}
		console.log(arr);
	}
	listPriority(arr){
		console.log("Список задач по приоритету: ");
		var buff=0;
		var iter = arr[Symbol.iterator]();
		for(var i=0;i<arr.length; i++){
			for(var j=0;j<arr.length-1; j++){
				if(arr[j].priority>arr[j+1].priority){
					buff=arr[j].priority;
					arr[j].priority=arr[j+1].priority;
					arr[j+1].priority=buff;
				}
			}
		}
		console.log(arr);
		for(var j of arr){
			console.log("Задача: "+j.name+", приоритет "+j.priority+", время завершения задачи: "+j.dateEnd);
		}
		console.log(iter.next());
	}
}
var arr=[];
var task1=new Task("Погулять с собакой", 5,"2018-05-08 15:00:00");
var task2=new Task("Сходить в кино",6, "2018-05-06 18:00:00");
var task3=new Task("Сделать задание по проге",4,"2018-05-07 21:30:00");
var arrCreateTask=[task1,task2,task3];
var task=new TaskPlan();
task.addTask("Сделать домашнее задание по курсам", 2 ,"2018-05-07 19:00:00");
task.addTask("Помыть посуду",1,"2018-05-06 19:40:00");
task.addTask("Сходить в магазин", 3, "2018-05-06 16:00:00");
console.log(arr);

console.log(`Добавленно ${arrCreateTask.length} задач(и).`);
task.addSeveralTasks(...arrCreateTask);
console.log(arr);

task.getTaskForToday(arr);
task.getTaskForTomorrow(arr);
task.listPriority(arr);
//task.deleteTask(arr);  //удаление задач




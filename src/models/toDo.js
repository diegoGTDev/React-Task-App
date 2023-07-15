// class ToDoManager {
//     tasks = [];
//     constructor() {
//         this.tasks = [
//             { text: 'Learn reactJS', completed: false},
//             { text: 'Learn JS', completed: true},
//             { text: 'Learn CSS', completed: false},
//             { text: 'Learn HTML', completed: true},
//             { text: 'A', completed: true}
//         ];
//         localStorage.setItem('tasks', JSON.stringify(this.tasks));
//     }

//     addTask(text, state) {
//         let task = { text: text, completed: state};
//         this.tasks.push(task);
//     }
//     deleteTask(task) {
//         let index = this.tasks.indexOf(task);
//         this.tasks.splice(index, 1);
//     }
//     displayTasks() {
//         return this.tasks;
//     }
//     countToDos() {
//         return this.tasks.length;
//     }

//     completedToDos(){
//         let count = 0;
//         this.tasks.forEach(task => {
//             if(task.completed) {
//                 count++;
//             }
//         });
//         return count;
//     }
// }

// export {ToDoManager}
let idCount = 0;
let todos = []
let enter = document.getElementById('input');
enter.addEventListener('keydown', (event) => {
   if (event.key == 'Enter') {
      addTodo()
   }
})
function addTodo() {
   let input = document.getElementById('input');
   if (input.value.trim() === ''){
      Swal.fire({
         title: "Todo empty!",
         text: "Todo cannot be empty!",
         icon: "error"
       });
   }
   else{
      todos.push({
         id: idCount,
         name: input.value
      })
      input.value = "";
      render()
   }
}

function render() {
   let input = document.getElementById('input').value;
   input = ''
   let todo = document.getElementById('todos');
   todo.style.height = '40vh'
   todo.innerHTML = ""
   for (let i = 0; i < todos.length; i++) {
      console.log(todos[i])
      let todo_Div = document.createElement('div');
      let todo_p = document.createElement('p');
      let deletBtn = document.createElement('button');
      let updateBtn = document.createElement('button');
      let time = document.createElement('strong')
      todo_p.textContent = todos[i].name;
         let date = new Date();
         let hours = date.getHours();
         let minuts = date.getMinutes();
         let second = date.getSeconds();
         let am_pm = 'AM'
         if (hours > 12){
            hours = hours - 12;
            am_pm = 'PM'
         };
         let total = `${hours.toString().padStart(2, 0)}:${minuts.toString().padStart(2,0)}:${second.toString().padStart(2,0)}`
      // console.log(total)
       time.textContent = total
      // time.textContent = total
      // time.innerHTML = setInterval(clock,1000)
      deletBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
      updateBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
      todo_Div.setAttribute('id', todos[i].id);
      todo_Div.setAttribute('class', 'todoList');
      todo_p.setAttribute('id', 'para')
      deletBtn.setAttribute('onclick', `deletTodo(${todos[i].id})`)
      updateBtn.setAttribute('onclick', `editBtn(${todos[i].id})`)
      todo_Div.appendChild(todo_p);
      todo_Div.appendChild(deletBtn);
      todo_Div.appendChild(updateBtn);
      todo_Div.appendChild(time)
      todo.appendChild(todo_Div);
      console.log(todo)
   }
   idCount++
}

function deletTodo(del) {
   let index;
   for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == del) {
         index = i
         // break;
      }
   }
   console.log('index',index)
      todos.splice(index , 1);
      render()
   // if (index !== -1){
   // }
}

function editBtn(end) {
   console.log(end)
   let index;
   for (let i = 0; i < todos.length; i++) {
      if(todos[i].id == end){
         index = i
      }      
   }
   let user = prompt('Enter your todo',todos[index].name);
   if(user.trim() !== ''){
      todos[index].name = user;
      render()
   }
   else{
      Swal.fire({
         title: "Todo empty!",
         text: "Todo cannot be empty!",
         icon: "error"
       });
      // alert("Todo name cannot be empty!");
   }
}

function clock(){
   
}

// class Task{
//     constructor(name){
//     this.name=name;
// }
//   getInfo() {
//     return `${this.name}`;
//   }
// }


// class ManageTasks{
//   constructor() {
//     this.tasks = []; // tasks listi
//   }

//   AddTask(task){
// this.tasks.push(task);
//   }


//    listTasks() {
//     this.tasks.forEach((tas, index) => {
//       console.log(`${index + 1}. ${tas.getInfo()}`);
//     });
//    }}


   


 let addTodo = () => {
        let todoText = document.getElementById('todo-text').value;
        if(todoText != ''){
            setData(todoText);
            listTodo(); 
        }
    }


        let setData = (item) => {
        if(getData(item) != false) {
            alert("Item already added in todo");
        }else{
            let data = getData(); 
            data = (data != false) ? data : []; 
            data.push(item);
            data = JSON.stringify(data);
         
            localStorage.setItem('mytodo',data);
        }
    }


      let getData = (item = null) => {
        let data = JSON.parse(localStorage.getItem('mytodo')); 
        if(data){

            if(item) {
                if(data.indexOf(item) != -1){
                    return data[item];
                }else{
                    return false;
                }
            }
            return data;
        }
        return false;
    }


        let listTodo = () => {
        let html = ``;
        let data = getData(); 
        if(data){
            html += `<ol>`;
            data.forEach((value,item
            ) => {
                html += `<li>${value} &nbsp;&nbsp;&nbsp;<button onclick="removeData(${item})">Remove</button></li>`;
            });
            html += `</ol>`;
        }
        document.getElementById('todo-item').innerHTML = html;
    }



        let removeData = (itemId) => {
            let data = getData();
            if(data){
                let newData = data.filter((v,i) => { return i != itemId });
                newData = JSON.stringify(newData);
                localStorage.setItem('mytodo',newData);
                listTodo();
            }else{
                alert("no data found");
            }

    } 
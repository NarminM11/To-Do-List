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
        let todoText = document.getElementById('todo-text').value; // id-si todo-text olan elementi götürür
        if(todoText != ''){ //boş deyilsə yaddaşa yazır
            setData(todoText);
            listTodo(); //listi yenidən göstərmək üçün
        }
    }


        let setData = (item) => {
        if(getData(item) != false) {
            alert("Item already added in todo"); //elave elediyimiz task artıq siyahıda varsa alert mesajı verir
        }else{ //əgə yoxdursa
            let data = getData(); //əvvəlki dataları alır
            data = (data != false) ? data : []; //boş array
            data.push(item); //həmin item-i dataya əlavə edir
            data = JSON.stringify(data); //jsona
         
            localStorage.setItem('mytodo',data); //locala 
        }
    }


      let getData = (item = null) => {
        let data = JSON.parse(localStorage.getItem('mytodo')); //localdan mytodo datalarını alır və jsoana obyektinə çevirir
        if(data){
            if(item) { //əgər item datası göndərlibsə
                if(data.indexOf(item) != -1){ //
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
        if(data){ //siyahi varsa
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
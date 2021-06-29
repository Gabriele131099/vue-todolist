Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            todoList: [
                'Compra il Latte',
                'Compra il Pane',
                'Compra il Prosciutto', 
                
            ],
            newTask: '',
        },
        methods: {
            addTask: function(){
               if (this.newTask ==='' || this.newTask === 'undefined') {
                   alert('inserire un elemento')
                }else{
                    this.todoList.push(this.newTask)
                    this.newTask = ' '
               }
               
            },
            deleteTask: function(index){
                console.log(index)
                this.todoList.splice(index, 1)
            },
            
            
        }
    }
    
    );
    
        
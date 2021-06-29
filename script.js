Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            todoList: [
                {elementList: 'Compra il Latte'},
                {elementList: 'Compra il Pane'},
                {elementList: 'Compra il Prosciutto'}, 
                
            ],
            newTask: '',
        },
        methods: {
            addTask: function(){
                this.todoList.push(this.newTask)
                this.newTask = ' '
            },
            deleteTask: function(index){
                console.log(index)
                this.todoList.splice(index, 1)
            },
            
            
        }
    }
    
    );
    
        
Vue.config.devtools = true;

new Vue(
    {
        el: '#app',
        data: {
            todoList: [
             'qui dentro metteremo tutti i dati',
             'della nostra applicazione.',
             'la nostra app si attiverà e verrà', 
             'eseguita in funzione di...'

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
            }


        }
    }
    
 );

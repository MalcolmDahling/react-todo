import { useState } from 'react';
import './App.css';
import { AddTodo } from './components/AddTodo/AddTodo';
import PrintTodo from './components/PrintTodo/PrintTodo';
import { ITodo } from './models/ITodo';


function App(){

    const [todos, setTodos] = useState<ITodo[]>([
        {text:'qwer', done:false},
        {text:'asdf', done:false},
        {text:'zxcv', done:false}
    ]);


    function addTodo(todo:ITodo){
        setTodos([...todos, todo]);
    }


    function removeTodo(name:string){
        let array = todos.filter((todo) => {
            return todo.text !== name;
        });

        setTodos(array);
    }


    function completeTodo(id:string){

        for(let i = 0; i < todos.length; i++){

            if(todos[i].text == id){

                let array = [...todos];

                if(todos[i].done){
                    array[i].done = false;
                }

                else{
                    array[i].done = true;
                }
                
                setTodos(array);
            }
        }
    }


    return (
        <div className="App">
            <PrintTodo todos={todos} removeTodo={removeTodo} completeTodo={completeTodo}></PrintTodo>
            <AddTodo addTodo={addTodo}></AddTodo>
        </div>
    );
}

export default App;

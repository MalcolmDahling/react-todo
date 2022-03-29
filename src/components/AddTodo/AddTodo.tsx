import { ChangeEvent, useState } from "react";
import { ITodo } from "../../models/ITodo";
import "./AddTodo.css";

interface IAddTodoProps{
    addTodo(todo:ITodo):void;
}

export function AddTodo(props:IAddTodoProps){

    const [text, setText] = useState('');

    function handleChange(e: ChangeEvent<HTMLInputElement>){
        setText(e.target.value);
    }
    

    function addTodo(){
        props.addTodo({text:text, done:false})
        setText('');
    }

    return(
        <form>
            <input type="text" placeholder="Add todo" value={text} onChange={handleChange}></input>
            <input type="button" value="Save" onClick={addTodo}></input>
        </form>
    );
}
import { ITodo} from "../../models/ITodo";
import { ITodosProps } from "../../models/ITodosProps";
import "./PrintTodo.css";


export default function PrintTodo(props:ITodosProps){

    let todos = props.todos.map((todo:ITodo, i:number) => {
        return(
            <li key={i}>
                <input type="button" value="X" onClick={removeTodo} name={todo.text}></input>
                <p onClick={completeTodo} id={todo.text} className={todo.done ? 'done' : ''}>{todo.text}</p>
            </li>
        );
    });


    function removeTodo(e:any){
        props.removeTodo(e.target.name);
    }

    function completeTodo(e:any){
        props.completeTodo(e.target.id);
    }
    

    return(
        <div>
            <ul>
                {todos}
            </ul>
        </div>
    );
}


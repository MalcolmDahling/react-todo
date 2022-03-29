import { ITodo } from "./ITodo";

export interface ITodosProps{
    todos:ITodo[];
    removeTodo(name:string):void;
    completeTodo(id:string):void;
}
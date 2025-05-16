import React from "react";
import tick from "../assets/tick.png";
import notTick from "../assets/circle.png";
import deleteIcon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
        <img src={isComplete ? tick: notTick} alt="" className="w-8" />
        <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" :""}`}>{text} </p>
      </div>
      <img onClick={()=>{deleteTodo(id)}} src={deleteIcon} alt="delte icon" className="w-6 cursor-pointer" />
    </div>
  );
};

export default TodoItems;

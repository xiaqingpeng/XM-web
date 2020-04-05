import  {ADD_TODO,SUB_TODO}  from './action-type.js'
export  const  handleAddTodo =(data)=>{
    return {
        type:ADD_TODO,
        payload:data
    }
}
export  const  handleSubTodo =(data)=>{
    return {
        type:SUB_TODO,
        payload:data
    }
}
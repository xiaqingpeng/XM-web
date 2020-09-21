import  {ADD_TODO,SUB_TODO, ADD_ROUTER, SUB_ROUTER}  from './actionType.js'
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
export  const  handleAddRouter =(data)=>{
    return {
        type:ADD_ROUTER,
        payload:data
    }
}
export  const  handleSubRouter =(data)=>{
    return {
        type:SUB_ROUTER,
        payload:data
    }
}
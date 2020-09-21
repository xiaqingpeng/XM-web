import request from '../../utils/http';
export  const getUserList = ()=>{
    return request.get("/find_user").then((res)=>{
        return res
    })
}

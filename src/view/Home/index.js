import React from 'react'
import { useHistory } from "react-router-dom";
const Home=() =>{
    const history = useHistory();
  console.log("history===>", history);
    return (
        <div>
            主页
        </div>
    )
}
export default  Home

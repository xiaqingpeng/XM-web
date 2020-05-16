import React from 'react'
import { useHistory } from "react-router-dom";
const ChargePileManage=(props) =>{
    const history = useHistory();
    console.log("history===>", history);

    return (
        <div>
            设备版本管理
        </div>
    )
}
export default  ChargePileManage

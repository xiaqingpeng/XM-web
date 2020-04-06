import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu, Layout } from "antd";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import { handleAddRouter} from '../../store/action/create-action'
import Home from "../Home/index";
import DeviceVersionManage from "../DeviceManage/DeviceVersionManage";
import ChargePileManage from "../DeviceManage/ChargePileManage";
import ChargeStationManage from "../DeviceManage/ChargeStationManage";

import SliderList from "../../public/sider";
import HeaderView from '../Header'
import './index.css'
const {  Content } = Layout;

const { SubMenu } = Menu;

const  SliderListView = ()=> {
  const dispatch = useDispatch();

  // 取出仓库中定义的 state
  const state = useSelector((state) => {
    return state;
  });
  console.log(state)
  const {routerList} = state.router
 const  handleSliderList=(SliderList)=>{
 
    return SliderList.map((item, index) => {
      if (item.MenuItem) {
          return (
            <SubMenu key={item.key} title={item.title} params={item}>
              {handleSliderList(item.MenuItem)}
            </SubMenu>
          );
        
      } else {
        console.log(item.path)
        let state = typeof(item.content)==='string'?item:item.title
        return (
          <Menu.Item key={item.key} params={item}>
            <Link to={item.path} > {item.content}</Link>
          </Menu.Item>
        );
      }
    })
  }
  const handleClick=(e)=>{
   console.log(e,routerList)
   console.log(e.item.props.params)
   const params = e.item.props.params
   if(routerList.includes(params)===false){
       routerList.push(params)
       if(routerList.length>6){
         routerList.shift()
       }
       dispatch(handleAddRouter(routerList))
   }
   
  }
  
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div  className='sider-box'>
            <div  className='sider-header'>
                <img src='https://himg.bdimg.com/sys/portraith/item/hec.1.173b0160.xCs_5bY5_sJdLWVFQDUlAA.jpg' alt='' className='sider-image'  />
            </div>
              <Menu
                onClick={handleClick}
                style={{ width: 256}}
                defaultSelectedKeys={["index"]}
                defaultOpenKeys={["sub0"]}
                mode="inline"
              >
                {handleSliderList(SliderList)}
              </Menu>
           
           
          </div>

          <Layout>
            <HeaderView></HeaderView>
            <Content>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/device_version_manage/:name" component={DeviceVersionManage} />
                <Route exact path="/charge_pile_manage" component={ChargePileManage} />
                <Route exact path="/charge_station_manage" component={ChargeStationManage} />
              </Switch>
            </Content>
          </Layout>
        </div>
      </Router>
    )
  
}

export default SliderListView;

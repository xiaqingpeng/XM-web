import React from 'react'
// import Sider from './view/Sider'
import { HashRouter, Route, Switch } from 'react-router-dom';
import FormList  from './components/Form/index'
import Home  from './components/Form/home'
import Welcome  from './components/Form/welcome'
export default ()=>{
  return  (<HashRouter>            
  <Switch>                
      <Route exact path="/" component={FormList} />                
      <Route exact path="/home" component={Home} />                
      <Route exact path="/welcome" component={Welcome} />            
  </Switch>        
</HashRouter>    )


  
  
}

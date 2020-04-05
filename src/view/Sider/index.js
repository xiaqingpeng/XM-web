import React, { Fragment } from "react";
import { Menu, Layout } from "antd";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Link,
} from "react-router-dom";
import Index from "../../components/Form/index";
import Home from "../../components/Form/home";
import Welcome from "../../components/Form/welcome";
import SliderList from "../../public/sider";

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

class SliderListView extends React.Component {
  handleClick = (e) => {
    console.log("click ", e);
  };
  handleSliderList(SliderList) {
    return SliderList.map((item, index) => {
      if (item.MenuItem) {
        if (item.MenuItemCopy) {
          console.log(item.MenuItem);
          return (
            <SubMenu key={item.key} title={item.title}>
              {item.MenuItem.map((item) => {
                return (
                  <Menu.Item key={item.key}>
                    <Link to={item.path}>{item.content}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        } else {
          return (
            <SubMenu key={item.key} title={item.title}>
              {this.handleSliderList(item.MenuItem)}
            </SubMenu>
          );
        }
      } else if (item.ItemGroup) {
        return (
          <SubMenu key={item.key} title={item.title}>
            {item.ItemGroup.map((item, index) => {
              return (
                <Menu.ItemGroup key={item.key} title={item.title}>
                  {this.handleSliderList(item.MenuItem)}
                </Menu.ItemGroup>
              );
            })}
            ;
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.path}>{item.content}</Link>
          </Menu.Item>
        );
      }
    });
  }
  render() {
    console.log(SliderList);
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <Menu
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
          >
            {this.handleSliderList(SliderList)}
          </Menu>
          <Layout>
            <Header style={{ background: "none" }}>
                header
            </Header>
            <Content>
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/welcome" component={Welcome} />
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </div>
      </Router>
    );
  }
}

export default SliderListView;

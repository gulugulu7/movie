//导入路由
import { HashRouter, Route, Link, Redirect } from "react-router-dom";
import React from "react";
import "antd/dist/antd.css";
import style from "./css/app.module.scss";

//导入路由相关的组件页面
import HomeContainer from "./components/home/HomeContainer";
import MovieContainer from "./components/movie/MovieContainer";
import AboutContainer from "./components/about/AboutContainer";

//按需导入ant-design组件
import { Layout, Menu, Switch } from "antd";
const { Header, Content, Footer } = Layout;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    console.log();
  }

  render() {
    return (
      <HashRouter>
        <Layout className="layout" style={{ minHeight: "100%" }}>
          <Header>
            <div className={style.logo} />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[window.location.hash.split("/")[1]]}
            >
              <Menu.Item key="home">
                <Link to="/home">首页</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to="/movie/in_theaters/1">电影</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">关于</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={{ backgroundColor: "#fff", flex: 1 }}>
            <Route path="/home" component={HomeContainer}></Route>
            <Route path="/movie" component={MovieContainer}></Route>
            <Route path="/about" component={AboutContainer}></Route>
            <Redirect from="/*" to="/movie/in_theaters/1"></Redirect>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;

import React, { Component } from "react";

import { Button, Spin, Alert } from "antd";
import { LeftOutlined } from "@ant-design/icons";
// import fetchJSONP from "fetch-jsonp";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      isloading: true,
    };
  }

  componentWillMount() {
    const data = require("../test_data/detail.json");
    setTimeout(() => {
      this.setState({
        info: data,
        isloading: false,
      });
    }, 1000);

    // fetchJSONP(
    //   "https://api/douban.com/v2/movie/subject/" + this.props.match.params.id
    // )
    //   .then((response) => {
    //     response.json();
    //   })
    //   .then((data) => {
    //     this.setState({
    //       info: data,
    //     });
    //   });
  }
  render() {
    return (
      <div>
        <meta name="referrer" content="never"></meta>
        <Button type="primary" icon={<LeftOutlined />} onClick={this.goBack}>
          返回电影列表页面
        </Button>
        {this.renderInfo()}
      </div>
    );
  }

  goBack = () => {
    this.props.history.go(-1);
  };

  renderInfo = () => {
    if (this.state.isloading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="正在请求电影数据"
            description="精彩内容, 马上呈现..."
            type="info"
          />
        </Spin>
      );
    } else {
      return (
        <div>
          <div style={{ textAlign: "center" }}>
            <h1>{this.state.info.title}</h1>
            <img src={this.state.info.img} alt="" />
          </div>
          <p style={{ textIndent: "2em", lineHeight: "30px" }}>
            {this.state.info.summary}
          </p>
        </div>
      );
    }
  };
}

export default MovieDetail;

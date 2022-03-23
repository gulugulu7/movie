import React, { Component } from "react";
import { Spin, Alert } from "antd";
import MovieItem from "./MovieItem";
import { Pagination } from "antd";
// import fetchJSONP from "fetch-jsonp";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [], //电影列表
      nowPage: parseInt(props.match.params.page) || 1,
      pageSize: 12,
      total: 0,
      isloading: true,
      movieType: props.match.params.type,
    };
  }

  componentWillMount() {
    // fetch("api/api/getlunbo")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setTimeout(() => {
    //   this.setState({
    //     isloading: false,
    //   });
    // }, 1000);

    this.loadMovieListByTypeAndPage();
  }

  componentWillReceiveProps(nextProps) {
    this.setState(
      {
        isloading: true,
        nowPage: parseInt(nextProps.match.params.page) || 1,
        movieType: nextProps.match.params.type,
      },
      function () {
        this.loadMovieListByTypeAndPage();
      }
    );
  }

  render() {
    return <div>{this.renderList()}</div>;
  }

  loadMovieListByTypeAndPage = () => {
    // const start = this.state.pageSize * (this.state.nowPage - 1);
    // const url = `https://api.douban.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`;
    // fetchJSONP(url)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({
    //       isloading: false,
    //       movies: data.subjects,
    //       total: data.total,
    //     });
    //   });

    const data = require(`../test_data/${this.state.movieType}.json`);
    setTimeout(() => {
      this.setState({
        isloading: false,
        movies: data.subject,
        total: data.total,
      });
    }, 1000);
  };

  renderList = () => {
    if (this.state.isloading) {
      return (
        <Spin tip="Loading...">
          <Alert
            message="正在请求电影列表"
            description="精彩内容, 马上呈现..."
            type="info"
          />
        </Spin>
      );
    } else {
      return (
        <div>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.state.movies.map((item) => {
              return (
                <MovieItem
                  {...item}
                  key={item.id}
                  history={this.props.history}
                ></MovieItem>
              );
            })}
          </div>
          <div>
            <Pagination
              defaultCurrent={this.state.nowPage}
              total={this.state.total}
              pageSize={this.state.pageSize}
              onChange={this.pageChanged}
            />
          </div>
        </div>
      );
    }
  };

  pageChanged = (page) => {
    // window.location.href = "#/movie/" + this.state.movieType + "/" + page;
    this.props.history.push("/movie/" + this.state.movieType + "/" + page);
  };
}

export default MovieList;

import React, { Component } from "react";
import styles from "../../css/movie.module.scss";
import { Rate } from "antd";

class MovieItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className={styles.box} onClick={this.goDetail}>
        <meta name="referrer" content="never"></meta>
        <img src={this.props.img} alt="" className={styles.img} />
        <h4>电影名称: {this.props.title}</h4>
        <h4>上映年份: {this.props.year}年</h4>
        <h4>电影类型: {this.props.genres.join(", ")}</h4>
        <Rate disabled defaultValue={this.props.average / 2} />
      </div>
    );
  }

  goDetail = () => {
    this.props.history.push("/movie/detail/" + this.props.id);
  };
}

export default MovieItem;

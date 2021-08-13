import React, { Component } from "react";
import InputButton from "components/InputButton";
import Keyword from "components/Keyword";
import { callApi, callApiNaver } from "utils/callApi";
import styles from "./MovieSearch.module.scss";
import { map } from "async";

class MovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      keywords: ["블랙위도우", "보스베이비", "캡틴아메리카"],
      searchMovieList: null,
    };
  }

  search = async (value) => {
    const { history } = this.props;

    history.push(`?title=${value}`);
    const result = await callApi(
      `/searchMovieList.json?key=${process.env.REACT_APP_MOVIE_KEY}&movieNm=${value}`
    );
    this.setState({
      searchMovieList: result.movieListResult.movieList,
    });
    console.log(result);
  };

  submit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { location } = this.props;
    if (!location.search.split("=").includes(title)) {
      this.search(title);
    }
  };

  searchKeyword = (clickKeyword) => {
    this.search(clickKeyword);
  };

  render() {
    const { title, keywords, searchMovieList } = this.state;
    return (
      <div className={styles.movie_search_wrap}>
        <form onSubmit={this.submit}>
          <InputButton
            propsInput={{
              type: "text",
              className: styles.search_input,
              placeholder: "영화를 검색해보세요",
              value: title || "",
              onChange: (value) => this.setState({ title: value }),
            }}
            propsButton={{
              btnName: "검색",
              className: styles.search_button,
            }}
          />
        </form>
        <div className={styles.keyword_area}>
          {keywords.map((label, i) => (
            <Keyword test={this.searchKeyword} movieKey={label} key={i} />
          ))}
        </div>
        <div className={styles.movie_list_area}>
          <ul>
            {searchMovieList?.map((movie, i) => {
              return (
                <li key={i} className={styles.movie_info}>
                  <p>제목: {movie.movieNm || "-"}</p>
                  <p>장르: {movie.genreAlt || "-"}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default MovieSearch;

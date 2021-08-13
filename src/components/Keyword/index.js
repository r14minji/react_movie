import React from "react";
import randomColor from "utils/randomNum";
import styles from "./Keyword.module.scss";

function Keyword({ movieKey, test }) {
  return (
    <div
      className={styles.keyword_wrap}
      onClick={() => test(movieKey)}
      style={{
        backgroundColor: `rgb(${[
          randomColor(),
          randomColor(),
          randomColor(),
        ]})`,
      }}
    >
      <span>{movieKey}</span>
    </div>
  );
}

export default React.memo(Keyword);

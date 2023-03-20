import "./News.css";
import { connect } from "react-redux";
import NewsPost from "./NewsPost";
import { unlikeThisNewsAC, likeThisNewsAC } from './../../../Redux/newsReducer';
/**@jsxImportSource theme-ui */
const News = (props) => {
  debugger;
  let newsPost = props.news.map((el) => {
    return (
      <NewsPost
        news={el}
        key={el.id}
        unlikeThisNewsAC={props.unlikeThisNewsAC}
        likeThisNewsAC={props.likeThisNewsAC}
      />
    );
  });

  return <div className="news_wrap" sx={{ bg: "primary" }}>{newsPost}</div>;
};

let mapStateToProps = (state) => {
  return {
    news: state.newsReducer.news,
  };
};
export default connect(mapStateToProps, { unlikeThisNewsAC, likeThisNewsAC })(
  News
);

import { useParams } from "react-router-dom";

const withRouter = (Component) => {
  function ComponentWithRouter(props) {
    let params = useParams();
    return <Component {...props} routeParams={{ params }} />;
  }
  return ComponentWithRouter;
};
export default withRouter;

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading/loading";
import Layout from "./layout/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieAndTvShowData } from "./store/homepage-actions";
import Routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.homepage.isLoading);
  useEffect(() => {
    dispatch(getAllMovieAndTvShowData());
  }, [dispatch]);

  return (
    <React.Fragment>
      {isLoading ? (
        <Layout>
          <Routes />
        </Layout>
      ) : (
        <Loading type="fullscreen" />
      )}
    </React.Fragment>
  );
}

export default App;

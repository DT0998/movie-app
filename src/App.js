import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading";
import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Routes from "./configs/routes/routes";
import Layout from "./layouts";
import {
  getAllMovieAndTvShow,
  selectorLoading,
} from "./redux/pages/home/slice";

function App() {
  const isLoading = useSelector(selectorLoading);
  const dispatch = useDispatch();
  const fetchAllMovieAndTvShow = useCallback(async () => {
    try {
      await dispatch(getAllMovieAndTvShow()).unwrap();
    } catch (error) {}
  }, [dispatch]);
  useEffect(() => {
    // change title
    fetchAllMovieAndTvShow();
  }, [fetchAllMovieAndTvShow]);
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

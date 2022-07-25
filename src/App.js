import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading";
import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Routes from "./configs/routes/routes";
import Layout from "./layouts";
import { getAllMovieAndTvShow } from "./redux/pages/home/slice";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const fetchAllMovieAndTvShow = useCallback(async () => {
    try {
      setIsLoading(false);
      await dispatch(getAllMovieAndTvShow()).unwrap();
      setIsLoading(true);
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

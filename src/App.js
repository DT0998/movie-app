import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import classes from "./style.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Routes from "./configs/routes/routes";
import Layout from "./layouts";
import { getAllMovieAndTvShow } from "./redux/pages/home/slice";
// toast
import { toast } from "react-toastify";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getMovieAndTvShow = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(getAllMovieAndTvShow()).unwrap();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getMovieAndTvShow();
  }, [getMovieAndTvShow]);

  return (
    <React.Fragment>
      {isLoading ? (
        <div
          className={`${classes.loading} d-flex justify-content-center align-items-center`}
        >
          <div className={classes.loader}></div>
        </div>
      ) : (
        <Layout>
          <Routes />
        </Layout>
      )}
    </React.Fragment>
  );
}

export default App;

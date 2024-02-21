import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import classes from "./style.module.css";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Layout from "./layouts";
import { getAllMovieAndTvShow } from "./redux/pages/home/slice";
// toast
import { ToastContainer, toast } from "react-toastify";
import Routes from "./configs/routes";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const getMovieAndTvShow = useCallback(async () => {
    try {
      setIsLoading(true);
      await dispatch(getAllMovieAndTvShow()).unwrap();
    } catch (error) {
      toast.error("Failed to fetch data. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    getMovieAndTvShow();
  }, [getMovieAndTvShow]);

  return (
    <React.Fragment>
      {/* toast container */}
      <ToastContainer limit={1} />
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

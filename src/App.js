import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Loading } from "./components/loading";
import React, { useCallback, useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import Routes from "./configs/routes/routes";
import Layout from "./layouts";
import { getAllMovieAndTvShow } from "./redux/pages/home/slice";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const dispatch = useDispatch();
  const fetchAllMovieAndTvShow = useCallback(async () => {
    setIsError(false);
    try {
      setIsLoading(false);
      await dispatch(getAllMovieAndTvShow()).unwrap();
      setIsLoading(true);
    } catch (error) {
      setIsError(true);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,
      });
    }
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
      {/* toast error */}
      {isError && (
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
      )}
    </React.Fragment>
  );
}

export default App;

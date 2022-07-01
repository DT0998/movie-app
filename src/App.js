import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Loading } from "./components/loading/loading";
import Layout from "./layout/layout";
import { useEffect } from "react";
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
    <BrowserRouter basename="/movie-app">
      {isLoading ? (
        <Layout>
          <Routes />
        </Layout>
      ) : (
        <Loading type="fullscreen" />
      )}
    </BrowserRouter>
  );
}

export default App;

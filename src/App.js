import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {BrowserRouter } from "react-router-dom";
import { Loading } from "./components/loading/loading";
import Layout from "./layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovieAndTvShowData } from "./store/homepage-actions";
import Routes from "./routes/routes";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.homepage.loading);
  useEffect(() => {
    dispatch(getAllMovieAndTvShowData());
  }, [dispatch]);

  return (
    <BrowserRouter basename="/movie-app">
      {loading ? <Loading type="fullscreen" /> : null}
      <Layout>
        <Routes/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

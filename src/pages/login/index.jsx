import React, { useEffect, useState, useCallback } from "react";
import classes from "./style.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
const LoginPage = () => {
  const [loginImg, setLoginImg] = useState([]);
  // change title
  useEffect(() => {
    document.title = "Login";
  }, []);

  // api
  const API_KEY = "api_key=82cdb0894626ba4286c1d6bd41791249";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = BASE_URL + "/trending/all/day?" + API_KEY;
  const IMG_ORG = "https://image.tmdb.org/t/p/original/";

  const source = axios.CancelToken.source();

  // fetch movie api
  const getLoginImg = useCallback(async () => {
    try {
      const response = await axios.get(API_URL, {
        cancelToken: source.token,
      });
      const data = response.data;
      setLoginImg(data.results);
    } catch (error) {
      if (axios.isCancel(error)) {
        // Request was canceled
        console.log("Request canceled:", error.message);
      } else {
        console.error(error);
      }
    }
  }, [API_URL, source]);

  useEffect(() => {
    getLoginImg();

    return () => {
      // Cancel the request when the component is unmounted
      source.cancel();
    };
  }, [API_URL, getLoginImg, source]);

  return (
    <div className={`${classes.form_container} d-flex align-items-center justify-content-center`}>
      <div className={`my-5 ps-xl-5 ${classes.form_shadow}`}>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          <div className="text-center">
            {/* form login */}
            <form>
              <div className={`w-full px-md-5`}>
                <div className="text-xxl-start text-xl-center text-lg-center my-4 px-md-5 d-flex flex-column">
                  <label className={classes.form_title}>Login</label>
                  <label className={classes.form_content}>
                    Login watch and chill movie
                  </label>
                  <button type="button" className={classes.google_btn}>
                    Sign in with Google
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div
            className="d-flex justify-content-center"
          >
            {/* login img */}
            {loginImg?.map(
              (image, index) =>
                index < 1 && (
                  <LazyLoadImage
                    alt={image.backdrop_path}
                    src={IMG_ORG + image.backdrop_path}
                    className={`${classes.login_img} w-100 h-100`}
                    key={image.id}
                  />
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

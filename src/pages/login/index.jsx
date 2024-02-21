import React, { useEffect, useState, useCallback } from "react";
import classes from "./style.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import httpService from "../../services/http";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [loginImg, setLoginImg] = useState([]);
  const [hasError, setHasError] = useState(false);
  // change title
  useEffect(() => {
    document.title = "Login";
  }, []);

  // api
  const IMG_ORG = "https://image.tmdb.org/t/p/w500/";
  const API_URL = "/movie/popular";
  
  // fetch movie api
  const getLoginImg = useCallback(async () => {
    try {
      const data = await httpService.get(API_URL);
      if (data) {
        setLoginImg(data.results);
      }
      setHasError(false);
    } catch (error) {
      setHasError(true);
      toast.error("Failed to fetch data. Please try again.");
    }
  }, [API_URL]);

  useEffect(() => {
    getLoginImg();
  }, [API_URL, getLoginImg]);

  return (
    <div
      className={`d-flex align-items-stretch justify-content-center p-lg-5 ${classes.form_container}`}
      style={{ height: "100%" }}
    >
      <div className={`my-5 ${classes.form_shadow} d-flex`}>
        <div className="d-flex flex-wrap justify-content-center align-items-stretch w-100">
          <div
            className={`text-center ${
              hasError ? "col-12" : "col-lg-6"
            } d-flex`}
          >
            {/* form login */}
            <form className="w-100 px-md-5 d-flex flex-column justify-content-center">
              <div className="text-xxl-start text-xl-center text-lg-center my-4 px-md-5">
                <div className="d-flex flex-column">
                  <label className={classes.form_title}>Login</label>
                  <label className={classes.form_content}>
                    Login watch and chill movie
                  </label>
                </div>
                <button type="button" className={classes.google_btn}>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
          {!hasError && (
            <div className="d-flex justify-content-center col-lg-6">
              {/* login img */}
              {loginImg?.map(
                (image, index) =>
                  index < 1 && (
                    <LazyLoadImage
                      alt={image.backdrop_path}
                      src={IMG_ORG + image.backdrop_path}
                      className={`${classes.login_img} w-100 h-100 d-lg-block d-md-none d-sm-none d-none`}
                      key={image.id}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default LoginPage;

import GoogleLogin from "react-google-login";

export const Loginform = () => {
  return (
    <form className="login_form px-md-5">
      <div className="text-xl-start text-md-center my-4 px-md-5">
        <div>
          <label className="login-form-title">Login</label>
        </div>
        <div>
          <label className="login-form-title">
            Login watch and chill movie
          </label>
        </div>
        <div>
          <GoogleLogin
            buttonText="Login"
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
            className="gg_button"
          />
        </div>
      </div>
    </form>
  );
};

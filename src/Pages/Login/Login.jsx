import React, { useContext, useState } from "react";
import signin from "../../assets/signIn.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLoginGoogle from "./SocialLogin/SocialLoginGoogle";
import { AuthContext } from "../../Context/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Login = () => {
  const { createLoginUser ,setUser} = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
    const location = useLocation();

  //
  const handleLogIn = (e) => {
    setErrorMessage("");
    //
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in with firebase
    createLoginUser(email, password)
      .then((result) => {
        if (result.user) {
           setUser(result.user);
          form.reset(); 
        navigate(location.state || "/"); 
        }
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage((error.code = "Invalid PassWord !"));
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "200px" }}
            animationData={signin}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">LogIn now!</h1>
            <form onSubmit={handleLogIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input w-full pr-10"
                    placeholder="Password"
                    
                  />
                  <span
                    className="absolute right-3 top-2.5 cursor-pointer text-xl"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>
                <h1 className="text-red-500">{errorMessage}</h1>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-primary mt-4">Log In</button>
                <p className="pt-1.5">
                  Don't Have An Account ? Please{" "}
                  <Link
                    className="text-blue-600 underline font-bold"
                    to="/register"
                  >
                    Register
                  </Link>
                  .
                </p>

                <div className="text-center mb-5">
                  <SocialLoginGoogle></SocialLoginGoogle>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

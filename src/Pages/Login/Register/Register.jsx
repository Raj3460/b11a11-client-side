import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import register from "../../../assets/register.json";
import { Link, useNavigate } from "react-router";
import SocialLoginGoogle from "../SocialLogin/SocialLoginGoogle";
import { AuthContext } from "../../../Context/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";

const Register = () => {
  const [errorName, setErrorName] = useState("");
  const [errorPassWord , setErrorPassword] = useState("");
  const [errorEmail , setErrorEmail] = useState("")
   const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate()
  const { createUserRegister } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();

    setErrorName("")
    setErrorPassword("")
    setErrorEmail("")
    const form = e.target;
    const name = form.name.value;
    //     for name =
    if (name.length < 5) {
      return setErrorName("Name must be in 5 characters");
    }
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
     const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

       // for password
    if (!pattern.test(password)) {
      return setErrorPassword(
        "Password must be at least 6 characters and include a number, a lowercase and an uppercase letter"
      );
    }
    const userInfo = {
      name,
      email,
      photo,
      password,
    };
    console.log(userInfo);

    // setup firebase create user
    createUserRegister(email, password)
      .then((result) => {
        console.log(result.user);
        if(result.user){
              toast.success(" Your Registration Successful", {
                     position: "top-center",
                     autoClose: 2000,
              })
        }
        
        navigate('/')
        form.reset();
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setErrorEmail(error.code)
        toast.error("Registration Failed!", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            className="md:w-[200px]"
            //      style={{ width: "200px" }}
            animationData={register}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder=" Enter Your Name"
              //     required
                />
                 <p className="text-red-500">{errorName}</p>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder=" Enter Your Email"
              //     required
                />
                 <p className="text-red-500">{errorEmail}</p>
                <label className="label">Photo URL</label>
                <input
                  name="photo"
                  type="url"
                  className="input"
                  placeholder="Photo URL"
              //     required
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
                  <p className="text-red-500">{errorPassWord}</p>
                
                <button className="btn btn-neutral mt-4">Register</button>
                <p>
                  Don't Have An Account ? Please{" "}
                  <Link
                    className="text-blue-600  underline font-bold"
                    to="/login"
                  >
                    LogIn
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

export default Register;

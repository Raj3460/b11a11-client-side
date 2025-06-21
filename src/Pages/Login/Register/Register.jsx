import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import register from "../../../assets/register.json";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLoginGoogle from "../SocialLogin/SocialLoginGoogle";
import { AuthContext } from "../../../Context/AuthContext";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [errorName, setErrorName] = useState("");
  const [errorPassWord, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { createUserRegister, setUser } = useContext(AuthContext);
  const location = useLocation();
  
//  
  const handleRegister = (e) => {
    e.preventDefault();
 


    setErrorName("");
    setErrorPassword("");
    setErrorEmail("");
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
        const user = result.user;
        console.log(user);
        if (result.user) {
          updateProfile(user, {
            displayName: name,
            photoURL: photo,
          })
            .then(() => {
              setUser({ ...user, displayName: name, photoURL: photo });
              toast.success("Registration Successful!", {
                position: "top-center",
                autoClose: 2000,
              });
              form.reset();
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log("profile update fail ", error);
              // setError("failed to update profile")
            });
        }
      })
      .catch((error) => {
        console.log(error.code, error.message);
        setErrorEmail(error.code = "Email already in");
        toast.error("Registration Failed!", {
          position: "top-center",
          autoClose: 2000,
        });
      });
  };
  return (
   
      <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content lg:gap-14 flex-col lg:flex-row-reverse w-full max-w-6xl p-4"> 
        <div className="text-center p-7 border lg:text-left lg:w-1/2  justify-center items-center"> 
          <Lottie
            className="md:w-[350px] md:h-[350px] w-[250px] h-[250px]" 
            animationData={register}
            loop={true}
          />
           <h2 className="text-2xl font-bold text-gray-800 mt-4">Join Our Community</h2>
           <p className="text-gray-600 mt-2">
            Create an account to unlock all features
           </p>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl lg:w-1/2"> 
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center mb-6">Register now!</h1> 
            <form onSubmit={handleRegister}>
              <fieldset className="form-control"> 
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  className="input input-bordered w-full" 
                  placeholder="Enter Your Name"
                />
                <p className="text-red-500 text-sm mt-1">{errorName}</p> 

                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter Your Email"
                />
                <p className="text-red-500 text-sm mt-1">{errorEmail}</p>

                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="url"
                  className="input input-bordered w-full"
                  placeholder="Photo URL"
                />

                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    className="input input-bordered w-full pr-10"
                    placeholder="Password"
                  />
                  <span
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-xl" 
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </span>
                </div>
                <p className="text-red-500 text-sm mt-1">{errorPassWord}</p>

                <button className="btn btn-primary w-full mt-6">Register</button> 
                
                <p className="text-center mt-4"> 
                  Already Have An Account? Please{" "}
                  <Link
                    className="text-blue-600 underline font-bold hover:text-blue-800 transition-colors duration-200" 
                    to="/login"
                  >
                    Login
                  </Link>
                  .
                </p>



                <div className="text-center mb-5">
                  <SocialLoginGoogle />
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

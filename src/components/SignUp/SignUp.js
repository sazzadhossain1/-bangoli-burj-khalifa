import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import "./signUp.css";
import { AuthContext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { createUser, signInWithGoogle, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    // console.log(email, name, password, confirm);

    if (password.length < 8) {
      setError("Please Password length at least 8 characters");
      return;
    }

    if (password !== confirm) {
      setError("Password do not match");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
        form.reset();
        handleUpdateUserProfile(name);
        handleEmailVerification();
        toast.success("Successfully toasted!");
      })
      .catch((error) => setError(error.message));
    setSuccess(false);
    form.reset();
  };

  // signIn with Google //
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // send email verification function //
  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        console.log("email send");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // get user name function, update user display  name in the ui nav bar //
  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then(() => {
        console.log("get the user name");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl font-bold my-6">Please SignUp now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  name="confirm"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>

              <h1>
                Already have an account?
                <Link style={{ color: "green" }} to="/login">
                  Please login
                </Link>
              </h1>
              <p style={{ color: "red" }} className="successAndError">
                {error}
              </p>
              {success && (
                <p style={{ color: "green" }} className="successAndError">
                  User Created Successfully
                </p>
              )}
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>

            <button
              onClick={handleGoogleSignIn}
              className="googleBtn btn btn-primary"
            >
              <FaGoogle></FaGoogle>
              <p className="ml-5">SignIn With Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

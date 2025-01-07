import { useState, useEffect } from "react";

function LoginSignup() {
  useEffect(() => {
    const imgBtn = document.querySelector(".img__btn");
    const cont = document.querySelector(".cont");

    const toggleSignup = () => {
      cont.classList.toggle("s--signup");
    };

    imgBtn.addEventListener("click", toggleSignup);

    return () => {
      imgBtn.removeEventListener("click", toggleSignup);
    };
  }, []);

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed", formData);
    let responseData;
    console.log(responseData);
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error || "An error occurred");
    }
  };

  const signup = async () => {
    console.log("signup function executed", formData);
    let responseData;
    console.log(responseData);
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.error || "An error occurred");
    }
  };

  return (
    <div className="loginsignup">
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome back,</h2>
          <label>
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
            />
          </label>
          <p className="forgot-pass"></p>
          <button onClick={login} type="button" className="submit">
            Submit
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>New here?</h3>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h3>One of us?</h3>
              <p>
                If you already have an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label>
              <span>Name</span>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={changeHandler}
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type="email"
                value={formData.email}
                onChange={changeHandler}
                name="email"
              />
            </label>
            <label>
              <span>Password</span>
              <input
                name="password"
                value={formData.password}
                onChange={changeHandler}
                type="password"
              />
            </label>
            <button onClick={signup} type="button" className="submit">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;

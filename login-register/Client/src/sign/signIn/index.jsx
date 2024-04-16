import React, { useState } from "react";
import "./style.css";
function SignIn({ setSign, setHome }) {
  const [user, setUser] = useState({
    userEmail: "",
    userPass: "",
  });
  const [showPass, setShowPass] = useState(false)
  const logIn = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user")
      .then((resp) => resp.json())
      .then((users) => {
        let userWithEmail = users.find(
          (userInfo) =>
            userInfo.userEmail === user.userEmail &&
            userInfo.userPass === user.userPass
        );
        if (userWithEmail) {
          setHome(true);
        } else {
          alert("Istifadəçi Tapilmadi");
        }
      });
  };
  return (
    <form className="register-body" onSubmit={logIn}>
      <h2 className="heading">Sign In</h2>
      <input
        type="email"
        className="user-inform"
        required
        placeholder="Email"
        onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
        value={user.userEmail}
      />
      <input
        type={showPass ? "text":"password"}
        className="user-inform"
        required
        placeholder="Password"
        onChange={(e) => setUser({ ...user, userPass: e.target.value })}
        value={user.userPass}
      />
      <div className="check-box">
        <input
          id="tmp-28"
          type="checkbox"
          onChange={() => setShowPass(!showPass)}
        />
        <label htmlFor="tmp-28">Show Password</label>
      </div>

      <button className="btn">Sign In</button>
      <button className="btn-second" onClick={() => setSign(true)}>
        Sign Up
      </button>
    </form>
  );
}

export default SignIn;

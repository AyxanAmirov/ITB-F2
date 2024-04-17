import React, { useState } from "react";
import "./style.css";
function Register({ setHome, setSign }) {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
const [wrongPass, setWrongPass] = useState(false)
  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user")
      .then((resp) => resp.json())
      .then((data) => {
        let serverEmail = data.find(
          (data) => data.userEmail === user.userEmail
        );
        if (serverEmail) {
          setWrongEmail(true);
        } else {
          if (user.userPass.length > 5) {
            fetch("http://localhost:3000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            });
            localStorage.setItem("user", JSON.stringify(user.userEmail));
            setUser({
              userName: "",
              userEmail: "",
              userPass: "",
            });
            setHome(true);
            
          } else {
            setWrongPass(true)
          }
        }
      });
  };
  return (
    <form className="register-body" onSubmit={addUser}>
      <h2 className="heading">Register</h2>
      <div className="mb-20">
        <input
          type="text"
          className="user-inform"
          required
          placeholder="Username"
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          value={user.userName}
        />
      </div>
      <div className="mb-15">
        <input
          type="email"
          className={wrongEmail ? "user-inform border-color-red" : "user-inform "}
          required
          placeholder="Email"
          onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
          value={user.userEmail}
        />
        {wrongEmail && (
          <p className="info-text">
            <i className="fa-solid fa-exclamation inform-icon"></i>Bu Gmail ilə
            qeydiyyatdan keçilib{" "}
          </p>
        )}
      </div>
      <div className="mb-20">
        <input
          type={showPass ? "text" : "password"}
          className={wrongPass?"user-inform border-color-red":"user-inform"}
          required
          placeholder="Password"
          onChange={(e) => setUser({ ...user, userPass: e.target.value })}
          value={user.userPass}
        />
        {
          wrongPass&&<p className="info-text">
          <i className="fa-solid fa-exclamation inform-icon"></i>
          Şifrə 5 simvoldan az olmamaldır
        </p>
        }
      </div>
      <div className="check-box">
        <input
          id="tmp-28"
          type="checkbox"
          onChange={() => setShowPass(!showPass)}
        />
        <label htmlFor="tmp-28">Show Password</label>
      </div>
      <button className="btn">Sign Up</button>
      <button className="btn-second" onClick={() => setSign(false)}>
        Sign In
      </button>
    </form>
  );
}

export default Register;

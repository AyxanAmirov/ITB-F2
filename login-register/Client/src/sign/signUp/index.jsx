import React, { useState } from "react";
import "./style.css";
function Register() {
  const [user, setUser] = useState({
    userName: "",
    userEmail: "",
    userPass: "",
  });
  const addUser = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user")
      .then((resp) => resp.json())
      .then((data) => {
        let serverEmail = data.find(
          (data) => data.userEmail === user.userEmail
        );
        if (serverEmail.length > 0) {
          console.log("İstifadəçi mövcuddur");
        } else {
          if (user.userPass.length > 5) {
            fetch("http://localhost:3000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            });
            setUser({
              userName: "",
              userEmail: "",
              userPass: "",
            });
          } else {
            console.log("Şifrə 5 simvoldan az olmamalıdır");
          }
        }
      });
  };
  return (
    <form className="register-body" onSubmit={addUser}>
      <h2 className="heading">Register</h2>
      <input
        type="text"
        className="user-inform"
        required
        placeholder="Username"
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
        value={user.userName}
      />
      <input
        type="email"
        className="user-inform"
        required
        placeholder="Email"
        onChange={(e) => setUser({ ...user, userEmail: e.target.value })}
        value={user.userEmail}
      />
      <input
        type="password"
        className="user-inform"
        required
        placeholder="Password"
        onChange={(e) => setUser({ ...user, userPass: e.target.value })}
        value={user.userPass}
      />
      <button className="btn">Sign Up</button>
    </form>
  );
}

export default Register;

import React, { useState } from "react";
import { NextPage } from "next";
import styles from "./page.module.css";

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-center items-center bg-black">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Submittt</button>
      </div>
    </form>
  );
};

export default LoginPage;

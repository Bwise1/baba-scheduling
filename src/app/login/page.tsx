"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const LoginPage: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (
    <form
    onSubmit={handleSubmit}
    
  >
    <div className=" h-4/6 w-1/3 top-1/2">
    <div className="text-center pt-4">
    <label
        className="block mb-2 text-gray-700 text-4xl"
      >
        <strong className="font-sans">BABA </strong>scheduling
      </label> 
    </div>
      <div className="p-6 rounded-lg shadow-md bg-blue-100">
    <h1 className="text-lg font-medium mb-4 text-center">Login</h1>
    <div className="mb-4">
      <label
        className="block font-medium mb-2 text-gray-700"
      >
        Email
      </label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border border-gray-400 p-2"
      />
    </div>
    <div className="mb-4">
      <label
        className="block font-medium mb-2 text-gray-700"
      >
        Password
      </label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full border border-gray-400 p-2"
      />
    </div>
    <button
      type="submit"
      className="bg-indigo-500 text-white py-2 px-4 hover:bg-indigo-800 rounded-xl w-full self-center"
    >
      Submit
    </button>
    <label
        className="block font-medium mb-2 text-gray-700 pt-4 text-center"
      >
        OR
      </label>
      <div className="text-center mt-10 font-bold">
      <Link href="/login">
     Create an account
    </Link>
    </div>
    </div>
    
    </div>
    
  </form>
);
};
export default LoginPage;

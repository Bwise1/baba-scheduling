"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { walkUpBindingElementsAndPatterns } from "typescript";

const inter = Inter({ subsets: ["latin"] });

const SignupPage = () =>{
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail]=useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(password.length<7){
        console.log("password too short !!");
    }
    if (!email.includes("@gmail.com")){
      console.log("wrong email, please enter a correct one !!");
    }
    console.log(`Email: ${email} Password: ${password} Username: ${username}`);
  };
  return(
    <form onSubmit={handleSubmit}>
         <div className=" h-4/6 w-2/5 m-auto p-6 flex-auto">
          <div className="bg-blue-100 rounded-lg p-6">
    <div className="text-center pt-10 pb-8">
    <label
        className="block mb-2 text-gray-700 text-4xl"
      >
        Signup to <strong className="font-sans">BABA </strong>scheduling for free
      </label> 
      Create a free account and get access to our services.
    </div>
    <input
        id="username"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="w-full border border-gray-400 p-2 rounded-lg shadow-md"
      />
    <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border border-gray-400 p-2 rounded-lg shadow-md mt-4"
      />
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full border border-gray-400 p-2 rounded-lg shadow-md mt-4"
      />
      <button
      type="submit"
      className="bg-indigo-500 text-white py-2 px-4 hover:bg-indigo-800 rounded-xl w-full self-center mt-4"
    >
      Sign up for free
    </button>
    <label
        className="block font-medium mb-2 text-gray-700 pt-4 text-center"
      >
        ------------------- OR -------------------
      </label>
      <div className="border border-gray-800 p-2 rounded-lg text-center mt-4 hover:bg-neutral-300">
     <Link href="">
      Sign up with Google
     </Link>
    </div>
    </div>
    </div>
        </form>
  );
};
export default SignupPage;
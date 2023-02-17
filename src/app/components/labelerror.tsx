"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface ChildcomponentProps{
    errorPasswordSet:string;
    errorEmailSet:string;
    errorUsernameSet:string;
    errorMainSet:string;
}

const Error: React.FC<ChildcomponentProps> = (props) =>{
    console.log(props.errorEmailSet,props.errorMainSet,props.errorPasswordSet,props.errorUsernameSet,"hello")
    return (
    <form>
        <label className="text-red-500">
       {props.errorEmailSet}
       {props.errorPasswordSet}
       {props.errorUsernameSet}
       {props.errorMainSet};
       error
        </label>
    </form>
    )
}
export default Error;
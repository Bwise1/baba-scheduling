"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { Inter } from "@next/font/google";
import calendar from "../images/calendar.JPG";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const display = () =>{
    return (
    <form className="text-right h-4/6 mr-10 mt-36 w-4/12">
    <div>
<h1 className="text-xl text-center"><strong> The best platform to plan your meetings is here!</strong></h1>
    </div>
    <div>
<Image src={calendar} alt="image" className="rounded-lg p-5"/>
    </div>
    <div className="text-right">
<h1 className="text-xl mt-20"><strong> Wahala no dey finish why not plan everything and live correctly ?...</strong></h1>
    </div>
        </form>
    )
}
export default display ;
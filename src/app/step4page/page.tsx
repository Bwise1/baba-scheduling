'use client';
import React, { useState } from 'react';
import styles from './pages.module.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import Lefticon from '../components/lefticon'
import whatsapp from '../images/whatsapp.png'
import zoom from '../images/zoom.png'
import Image from 'next/image';

const Step2page = () => {
    return (
        <form className='flex'>
            <div className="text-left mr-5 pt-7 pb-4">
                <div className=" h-1/2 m-auto flex-auto w-3/4 ml-24">
                    <div className="bg-gray-200 rounded-lg p-6">
                        <div className="pt-10 pb-8">
                            <label className="block mb-2 text-gray-700 text-3xl text-center">
                                Welcome to{' '}
                                <strong className="font-sans">BABA </strong>
                                scheduling!
                            </label>
                            <div className="w-3/4 m-auto">
                                We just need some basic info to get your profile
                                setup. You will be able to edit this later.
                            </div>
                            <div className="pl-12 pt-5">
                                Step 2 of 4
                                <div className="flex mt-2">
                                    <div className="h-2 bg-gray-600 w-20"></div>
                                    <div className="h-2 bg-gray-600 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-600 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-400 w-20 pl-3 ml-2"></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-5">
                                                     
                            </div>
                            <button className='text-sm font-bold text-slate-500 p-4 text-center self-center'> I will connect my calendar later</button>   
                        </div>
                    </div>
                </div>
            </div>
            
                <Lefticon />
            
        </form>
    );
};
export default Step2page;

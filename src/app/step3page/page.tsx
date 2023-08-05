'use client';
import React, { useState } from 'react';
import styles from './pages.module.css';
import { Inter } from '@next/font/google';
import Link from 'next/link';
import Lefticon from '../components/lefticon'
import whatsapp from '../images/whatsapp.png'
import zoom from '../images/zoom.png'
import facetime from '../images/facetime.png'
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
                                Step 3 of 4, Connect your video platform
                                <div className="flex mt-2">
                                    <div className="h-2 bg-gray-600 w-20"></div>
                                    <div className="h-2 bg-gray-600 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-600 w-20 pl-3 ml-2"></div>
                                    <div className="h-2 bg-gray-400 w-20 pl-3 ml-2"></div>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg mt-5">
                                <div className="p-5">
                                    <div className='border border-slate-300 rounded-lg text-center'>
                                        <div className='flex pb-3 p-2'>
                                            <Image src={whatsapp} alt='' className='h-10 w-10 border border-slate-300 p-1 mr-4 rounded-xl'>
                                            </Image>
                                            <h1 className='font-bold text-xl text-slate-600 mt-1'> Whatsapp video</h1>
                                            <button className='border border-slate-300 p-1 rounded-lg text-lg ml-44 hover:bg-slate-400'>
                                                Connect
                                            </button>
                                        </div>
                                        <hr></hr>
                                        <div className='flex p-2'>
                                            <Image src={zoom} alt='' className='h-10 w-10 border border-slate-300 p-1 mr-4 rounded-xl'>
                                            </Image>
                                            <h1 className='font-bold text-xl text-slate-600 mt-1 mr-3'> Zoom video</h1>
                                            <button className='border border-slate-300 p-1 rounded-lg text-lg hover:bg-slate-400 ml-52'>
                                                Connect
                                            </button>
                                        </div>
                                        <hr></hr>
                                        <div className='flex pb-3 p-2'>
                                        <Image src={facetime} alt='' className='h-10 w-10 border border-slate-300 p-1 mr-4 rounded-xl'>
                                            </Image>
                                            <h1 className='font-bold text-xl text-slate-600 mt-1'> Facetime video</h1>
                                            <button className='border border-slate-300 p-1 rounded-lg text-lg ml-48 hover:bg-slate-400'>
                                                Connect
                                            </button>  
                                        </div>

                                        
                                    </div>
                                    
                                    <button className='text-white py-2 px-4 rounded-xl w-full mt-2 self-center bg-indigo-500 hover:bg-indigo-700'>
                                        <Link href="/step4page">Next Step </Link>
                                    </button>
                                </div>                            
                            </div>
                            <button className='text-sm font-bold text-slate-500 p-4 text-center self-center m-auto'> I will connect my video later</button>   
                        </div>
                    </div>
                </div>
            </div>
            
                <Lefticon />
            
        </form>
    );
};
export default Step2page;

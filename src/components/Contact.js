import React from 'react';
import Image from 'next/image';

import { CiLocationArrow1 } from "react-icons/ci";

const Contact = () => {
 
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 overflow-y-auto" id="contact" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <h1 className="text-4xl font-bold mb-8 text-underline">
               Contact Me
            </h1>

            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name" style={{ color: "var(--foreground)" }}>
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-accent" id="name" type="text" placeholder="Your Name"  />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email" style={{ color: "var(--foreground)" }}>
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-accent" id="email" type="email" placeholder="Your Email"  />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message" style={{ color: "var(--foreground)" }}>
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-accent" id="message" rows="5" placeholder="Your Message" ></textarea>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button className="flex items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" style={{ background: "var(--accent-color)", borderRadius: "var(--border-radius)" }}>
                        Send      
                        <CiLocationArrow1 className="ml-2 text-xl cursor-pointer" />               
                    </button>
                </div>
            </form>

        </div>

    );
}

export default Contact;

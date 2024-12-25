'use client';

import { CiLocationArrow1 } from "react-icons/ci";


const Contact = () => {

    async function handleSubmit(e) {
        e.preventDefault();
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        const responseElement = document.getElementById("result");

        if (!name || !email || !message) {
            responseElement.innerHTML = "All fields are required.";
            responseElement.style.color = "red";
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "370661b0-2370-419d-a774-1f8b1695d803", // Can't do much with this key :) - Except for sending me a message
                    name: name,
                    email: email,
                    message: message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                responseElement.innerHTML = "Your message has been sent successfully!";
                responseElement.style.color = "var(--accent-color)";
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            } else {
                responseElement.innerHTML = "Something went wrong! Please try again.";
                responseElement.style.color = "red";
            }
        } catch (error) {
            responseElement.innerHTML = "An error occurred. Please try again later.";
            responseElement.style.color = "red";
        }

        setTimeout(() => {
            responseElement.innerHTML = "";
        }, 5000);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-8 overflow-y-auto" id="contact" style={{ background: "var(--background)", color: "var(--foreground)" }}>
            <h1 className="text-4xl font-bold mb-8 underline">Contact Me</h1>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="name" style={{ color: "var(--foreground)" }}>
                            Name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-background" id="name" name="name" type="text" placeholder="Your Name" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="email" style={{ color: "var(--foreground)" }}>
                            Email
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-background" id="email" name="email" type="email" placeholder="Your Email" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2" htmlFor="message" style={{ color: "var(--foreground)" }}>
                            Message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white text-background" id="message" name="message" rows="5" placeholder="Your Message"></textarea>
                    </div>
                </div>
                <button
                    className="flex items-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    style={{ background: "var(--accent-color)", borderRadius: "var(--border-radius)" }}
                >
                    Send
                    <CiLocationArrow1 className="ml-2 text-xl cursor-pointer" />
                </button>
                <p id="result" className="text-md text-center mt-4"></p>
            </form>
        </div>
    );
};

export default Contact;

import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import Notiflix from 'notiflix';

const Contact = () => {
    // Set the document title using a custom hook
    useDocTitle('MLD | Molad e Konsult - Send us a message');

    // State management for form inputs and errors
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    // Function to clear error messages
    const clearErrors = () => {
        setErrors([]);
    };

    // Function to reset form inputs after submission
    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    // Handle form submission and send data via axios
    const sendEmail = (e) => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true;
        document.getElementById('submitBtn').innerHTML = 'Loading...';
        let fData = new FormData();
        fData.append('first_name', firstName);
        fData.append('last_name', lastName);
        fData.append('email', email);
        fData.append('phone_number', phone);
        fData.append('message', message);

        axios({
            method: "post",
            url: process.env.REACT_APP_CONTACT_API,
            data: fData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            clearInput();
            // Display success notification
            Notiflix.Report.success(
                'Success',
                response.data.message,
                'Okay',
            );
        })
        .catch(function (error) {
            document.getElementById('submitBtn').disabled = false;
            document.getElementById('submitBtn').innerHTML = 'send message';
            // Handle errors and display failure notification
            const { response } = error;
            if (response.status === 500) {
                Notiflix.Report.failure(
                    'An error occurred',
                    response.data.message,
                    'Okay',
                );
            }
            if (response.data.errors !== null) {
                setErrors(response.data.errors);
            }
        });
    };

    return (
        <>
            {/* Main wrapper for the entire page */}
            <div>
                {/* Navigation bar component */}
                <NavBar />

                {/* Contact section with centered form */}
                <div id='contact' className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                    <div className="container mx-auto my-8 px-4" data-aos="zoom-in">
                        {/* Form for user input */}
                        <form onSubmit={sendEmail}>
                            <div className="w-full bg-white p-8 my-4 mr-auto rounded-2xl shadow-2xl">
                                {/* Form header */}
                                <div className="flex">
                                    <h1 className="font-bold text-center lg:text-left text-blue-900 uppercase text-4xl">Send us a message</h1>
                                </div>

                                {/* Grid layout for input fields */}
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                    <div>
                                        <input 
                                            name="first_name" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="First Name*" 
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.first_name}</p>
                                        }
                                    </div>
                                    
                                    <div>
                                        <input 
                                            name="last_name" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="text" 
                                            placeholder="Last Name*"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.last_name}</p>
                                        }
                                    </div>

                                    <div>
                                        <input 
                                            name="email"
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="email" 
                                            placeholder="Email*"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyUp={clearErrors}   
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.email}</p>
                                        }
                                    </div>

                                    <div>
                                        <input
                                            name="phone_number" 
                                            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                            type="number" 
                                            placeholder="Phone*"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            onKeyUp={clearErrors}
                                        />
                                        {errors && 
                                            <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                        }
                                    </div>
                                </div>

                                {/* Textarea for message input */}
                                <div className="my-4">
                                    <textarea 
                                        name="message" 
                                        placeholder="Message*" 
                                        className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyUp={clearErrors}
                                    ></textarea>
                                    {errors && 
                                        <p className="text-red-500 text-sm">{errors.message}</p>
                                    }
                                </div>

                                {/* Submit button */}
                                <div className="my-2 w-1/2 lg:w-2/4">
                                    <button 
                                        type="submit" 
                                        id="submitBtn" 
                                        className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Footer component */}
                <Footer />
            </div>
        </>
    );
};

export default Contact;
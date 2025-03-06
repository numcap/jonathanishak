import React, { useState } from "react";

export const Contact = () => {
	const [contactInfo, setContactInfo] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	return (
		<div className='flex flex-col justify-center items-center h-full w-full gap-5'>
			<p className='text-3xl font-semibold'>Contact Me :)</p>
			<span className='lg:w-96 w-3/5'>
				<p className='ml-1 mb-1'>Name</p>
				<input className='bg-white bg-opacity-40 py-2 px-4 rounded-2xl focus:border-none outline-none focus:scale-105 focus:bg-opacity-80 transition-all duration-300 focus:text-black w-full'></input>
			</span>
			<span className='lg:w-96 w-3/5'>
				<p className='ml-1 mb-1'>Email</p>
				<input className='bg-white bg-opacity-40 py-2 px-4 rounded-2xl focus:border-none outline-none focus:scale-105 focus:bg-opacity-80 transition-all duration-300 focus:text-black w-full'></input>
			</span>
			<span className='lg:w-96 w-3/5'>
				<p className='ml-1 mb-1'>Subject</p>
				<input className='bg-white bg-opacity-40 py-2 px-4 rounded-2xl focus:border-none outline-none focus:scale-105 focus:bg-opacity-80 transition-all duration-300 focus:text-black w-full'></input>
			</span>
			<span className='lg:w-96 w-3/5 h-1/5'>
				<p className='ml-1 mb-1'>Message</p>
				<textarea className='bg-white bg-opacity-40 py-2 px-4 rounded-2xl focus:border-none outline-none focus:scale-105 focus:bg-opacity-80 transition-all duration-300 focus:text-black w-full resize-none h-full'></textarea>
			</span>
			<button className='px-5 py-3 m-5 bg-black rounded-2xl hover:scale-110 hover:bg-white transition-all duration-300 hover:text-black text-white'>
				Submit
			</button>
		</div>
	);
};

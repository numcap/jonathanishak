import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Contact = () => {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full gap-5'>
			<p className='text-5xl font-semibold'>
				Contact Me{" "}
				<span className='inline-block'>
					<FaRegSmileBeam className='-mb-2' />
				</span>
			</p>
			<div className='flex flex-wrap gap-5 justify-center items-center'>
				<a
					href='mailto:jonathan.r.ishak@google.com'
					className='border border-notion-red w-20 h-20 p-3 rounded-3xl hover:bg-notion-red transition-all duration-500'
					target="_blank"
				>
					<MdOutlineEmail className='w-full h-full' />
				</a>
				<a
					href='Jonathans_Resume.pdf'
					className='border border-notion-green w-20 h-20 p-4 rounded-3xl hover:bg-notion-green transition-all duration-500'
					target="_blank"
				>
					<FaRegFilePdf className='w-full h-full' />
				</a>
				<a
					href='https://linkedin.com/in/jonathan-ishak'
					className='border border-notion-blue w-20 h-20 p-5 rounded-3xl hover:bg-notion-blue transition-all duration-500'
					target="_blank"
				>
					<FaLinkedinIn className='w-full h-full' />
				</a>
				<a
					href='https://github.com/numcap'
					className='border border-notion-purple w-20 h-20 p-4 rounded-3xl hover:bg-notion-purple transition-all duration-500'
					target="_blank"
				>
					<FaGithub className='w-full h-full' />
				</a>
			</div>
		</div>
	);
};

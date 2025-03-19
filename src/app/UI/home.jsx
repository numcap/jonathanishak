import { MdOutlineEmail } from "react-icons/md";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export function Home() {
	return (
		<div className='p-12 flex flex-col lg:flex-row h-full gap-x-10 justify-center gap-y-10 text-notion-text'>
			<div className='lg:h-[100%] items-center justify-center flex flex-col gap-3'>
				<span className='text-5xl w-fit h-fit text-nowrap'>Jonathan Ishak</span>
				<span className='text-3xl'>Software Engineer</span>
				<span className='text-center text-lg text-nowrap'>
					Western University for Software Engineering
				</span>
				<span className='flex gap-6 justify-center items-center'>
					<a href='mailto:jonathan.r.ishak@google.com' target='_blank'>
						<MdOutlineEmail className='w-8 h-8 hover:text-notion-red hover:scale-110 transition-all duration-300 cursor-pointer' />
					</a>
					<a href='Jonathans_Resume.pdf' target='_blank'>
						<FaRegFilePdf className='w-7 h-7 hover:text-notion-green hover:scale-110 transition-all duration-300 cursor-pointer' />
					</a>
					<a href='https://www.linkedin.com/in/jonathan-ishak' target='_blank'>
						<FaLinkedinIn className='w-7 h-7 hover:text-notion-blue hover:scale-110 transition-all duration-300 cursor-pointer' />
					</a>
					<a href='https://github.com/numcap' target='_blank'>
						<FaGithub className='w-7 h-7 hover:text-notion-purple hover:scale-110 transition-all duration-300 cursor-pointer' />
					</a>
				</span>
			</div>
			<div className=' justify-center flex lg:flex-grow xl:flex-grow-0 xl:w-1/2 flex-col gap-y-3'>
				<span>Hey,</span>
				<span>
					{" "}
					I'm Jonathan Ishak, a full-stack software engineer from Toronto who
					enjoys tackling complex problems and building creative solutions. I
					have a passion for both beautiful front-end responsive design and the
					complexity of back-end systems. In my free time, I explore new
					technologies and continuously enhance my skills through personal
					projects.
				</span>
				<span>
					What am I working on? <br /> lumenless - An app that takes you to go
					see the stars
				</span>
				<span></span>
			</div>
		</div>
	);
}

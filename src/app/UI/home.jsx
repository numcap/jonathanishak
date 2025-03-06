"use client";

export function Home() {
	return (
		<div className='p-12 flex flex-col lg:flex-row h-full gap-x-10 justify-center gap-y-10'>
			<div className='border border-red-200 lg:h-[100%] items-center justify-center flex flex-col gap-3'>
				<span className='text-5xl w-fit h-fit text-nowrap'>Jonathan Ishak</span>
				<span className='text-3xl'>Software Engineer</span>
				<span className='text-center text-xl'>
					Currently Attending:
					<br />
					Western University for Software Engineering
				</span>
			</div>
			<div className='border border-emerald-500 justify-center flex lg:flex-grow flex-col gap-y-3'>
				<span>hey,</span>
				<span>
					my name is jonathan ishak, and i am a passionate software engineer based in toronto, canada
				</span>
				<span>
					i have a strong passion for technology and software development. i enjoy solving complex problems and creating innovative solutions. my journey in software engineering started at a young age, and i have been continuously learning and growing ever since.
				</span>
				<span>
					in my free time, i love exploring new technologies, working on personal projects. i am always eager to learn new things and take on new challenges.
				</span>
			</div>
		</div>
	);
}

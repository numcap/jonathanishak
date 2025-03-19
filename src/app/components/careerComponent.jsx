export const CareerComponent = ({ job }) => {
	return (
		<div className='flex flex-col lg:w-[70%] xl:w-[48%] w-full'>
			<span>{job.date}</span>
			<span className='font-bold text-4xl'>{job.title}</span>
			<span className='flex'>
				<span className='text-2xl font-semibold'>{job.company}</span>
				{/* <img className="" src={job.img} /> */}
			</span>
			<span>{job.desc}</span>
			<span className='flex flex-wrap gap-3 mt-3'>
				{job.skills.map((skill) => (
					<span
						className='bg-notion-gray_bg border-[0.5px] border-notion-gray rounded-full py-1 px-2'
						key={skill}
					>
						{skill}
					</span>
				))}
			</span>
		</div>
	);
};

export const CareerComponent = ({ job }) => {
	return (
		<div className='flex flex-col w-full'>
			<span>{job.date}</span>
			<span className='font-bold text-4xl'>{job.title}</span>
			<span className='text-2xl font-semibold'>{job.company}</span>
			<span>{job.desc}</span>
			<span className='flex gap-x-3 mt-3'>
				{job.skills.map((skill) => (
					<span className='bg-gray-200 rounded-full py-1 px-2' key={skill}>
						{skill}
					</span>
				))}
			</span>
		</div>
	);
};

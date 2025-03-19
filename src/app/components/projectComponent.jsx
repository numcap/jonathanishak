import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectComponent = ({ project }) => {
	return (
		<div className=' lg:w-[60%] xl:w-[40%] w-full flex flex-col gap-2'>
			<a href={project.link ? project.link : null} className='group'>
				<span
					className={
						project.link
							? "font-bold text-2xl underline group-hover:text-notion-gray transition-all"
							: "font-bold text-2xl"
					}
				>
					{project.name}
					<FaExternalLinkAlt
						className={
							project.link
								? "inline-block ml-2 group-hover:scale-110 transition-all"
								: "hidden"
						}
					/>
				</span>
			</a>
			<span>{project.desc}</span>
			<span className='flex items-center'>
				<a href={project.github}>
					<FaGithub
						className={
							project.github
								? "w-8 h-8 hover:text-notion-gray transition-colors duration-0.5 mr-3"
								: "hidden"
						}
					/>
				</a>
				<span className='flex flex-wrap gap-2'>
					{project.tags.map((tag) => (
						<p
							className='rounded-full px-2 py-1 bg-notion-gray_bg border-[0.2px] border-notion-gray text-notion-text '
							key={tag}
						>
							{tag}
						</p>
					))}
				</span>
			</span>
		</div>
	);
};

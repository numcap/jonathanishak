import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export const ProjectComponent = ({ project }) => {
	return (
		<div className='border border-black w-[27rem] flex flex-col gap-2'>
			<a href={project.link} className='group'>
				<span
					className={
						project.link
							? "font-bold text-2xl underline group-hover:text-gray-700 transition-all"
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
			<span className='flex items-center gap-y-2 space-x-5'>
				<a href={project.github}>
					<FaGithub
						className={
							project.github
								? "w-8 h-8 hover:text-gray-500 transition-colors duration-0.5 "
								: "hidden"
						}
					/>
				</a>
                <span className="flex flex-wrap gap-2 items-center">
				{project.tags.map((tag) => (
					<p className='border rounded-full px-2 py-1 bg-neutral-300' key={tag}>
						{tag}
					</p>
				))}
                </span>
			</span>
		</div>
	);
};

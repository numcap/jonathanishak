import { ProjectComponent } from "../components/projectComponent";
import { ProjectsData } from "../data";

export function Projects() {
	return (
		<div className='flex flex-col p-12 h-full items-center justify-start gap-10 border border-black overflow-y-auto'>
			{ProjectsData.map((project) => {
				return <ProjectComponent project={project} key={project.name} />;
			})}
		</div>
	);
}

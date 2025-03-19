import { CareerComponent } from "../components/careerComponent";
import { ExperienceData } from "../data";

export function Career() {
	return (
		<div className='flex flex-col p-12 h-full items-center justify-start gap-10 overflow-y-auto text-notion-text'>
			{ExperienceData.map((job) => (
				<CareerComponent job={job} key={job.date} />
			))}
		</div>
	);
}

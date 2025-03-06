import { CareerComponent } from "../components/careerComponent";
import { ExperienceData } from "../data";

export function Career() {
	return (
		<div className='flex flex-col p-12 h-full items-center justify-start gap-10 border border-black overflow-y-auto'>
			{ExperienceData.map((job) => (
				<CareerComponent job={job} key={job.date} />
			))}
		</div>
	);
}

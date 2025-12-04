import { FaFigma, FaGitAlt, FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { SiCplusplus } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { createElement } from "react";
import { IoLogoFirebase, IoLogoVercel } from "react-icons/io5";
import { VscAzure } from "react-icons/vsc";

const languages = [
	{ name: "Python", icon: FaPython },
	{ name: "Java", icon: FaJava },
	{ name: "JavaScript", icon: FaJsSquare },
	{ name: "TypeScript", icon: BiLogoTypescript },
	{ name: "HTML", icon: FaHtml5 },
	{ name: "CSS", icon: FaCss3 },
	{ name: "SQL", icon: BiLogoPostgresql },
	{ name: "Swift", icon: FaSwift },
	{ name: "C Sharp", icon: TbBrandCSharp },
	{name: "C++", icon: SiCplusplus}
];

const frameworks = [
	{ name: "React", icon: FaReact },
	{ name: "Node", icon: FaNodeJs },
	{ name: "Express", icon: SiExpress },
	{ name: "Tailwind", icon: RiTailwindCssFill },
	{ name: "Sass", icon: FaSass },
	{ name: "Django", icon: SiDjango },
	{ name: "SpringBoot", icon: SiSpringboot },
	{ name: "Nextjs", icon: RiNextjsFill },
];

// Docker, AWS, GCP, Firebase, Git, Vercel, Postman, Figma, Grafana, MongoDB
const tools = [
	{ name: "Docker", icon: FaDocker },
	{ name: "AWS", icon: FaAws },
	{ name: "GCP", icon: SiGooglecloud },
	{ name: "Azure", icon: VscAzure },
	{ name: "Firebase", icon: IoLogoFirebase },
	{ name: "Git", icon: FaGitAlt },
	{ name: "Vercel", icon: IoLogoVercel },
	{ name: "Postman", icon: SiPostman },
	{ name: "Figma", icon: FaFigma },
	{ name: "MongoDB", icon: SiMongodb },
]

const sections = [
	{ title: "Languages", items: languages },
	{ title: "Frameworks", items: frameworks },
	{ title: "Tools", items: tools },
];

export function Skills() {
	const iconStyle =
		"lg:h-18 lg:w-18 w-16 h-16 rounded-2xl hover:opacity-25 transition-all duration-300";

	return (
		<div className='flex h-full flex-col items-center justify-start gap-10 overflow-y-auto p-12 text-notion-text desktop:justify-center'>
			<div className='flex w-full max-w-6xl flex-col items-center gap-12 desktop:flex-row desktop:items-start desktop:justify-between'>
				{sections.map((section) => (
					<section
						key={section.title}
						className='flex w-full max-w-md flex-col items-center gap-6 text-center'
					>
						<span className='text-5xl font-extrabold'>{section.title}</span>
						<div className='flex flex-wrap justify-center gap-10'>
							{section.items.map((item) => (
								<span className='group relative' key={item.name}>
									{createElement(item.icon, {
										className: iconStyle,
										key: item.name,
									})}
									<p className='pointer-events-none absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 text-center text-xl font-bold opacity-0 transition-all duration-350 group-hover:opacity-100'>
										{item.name}
									</p>
								</span>
							))}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}

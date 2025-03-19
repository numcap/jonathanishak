import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSwift } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandCSharp } from "react-icons/tb";
import { createElement } from "react";

const languages = [
	{ name: "Python", icon: FaPython },
	{ name: "Java", icon: FaJava },
	{ name: "JavaScript", icon: FaJsSquare },
	{ name: "HTML", icon: FaHtml5 },
	{ name: "CSS", icon: FaCss3 },
	{ name: "Swift", icon: FaSwift },
	{ name: "C Sharp", icon: TbBrandCSharp },
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

export function Skills() {
	const iconStyle =
		"lg:h-18 lg:w-18 w-16 h-16 rounded-2xl hover:opacity-25 transition-all duration-300";

	return (
		<div className='flex flex-col p-12 h-full items-center justify-start md:justify-center gap-10 overflow-y-auto text-notion-text'>
			<span className='text-5xl font-extrabold'>Languages</span>
			<div className='flex gap-10 flex-wrap justify-center'>
				{languages.map((language) => {
					return (
						<span className='relative group' key={language.name}>
							{createElement(language.icon, {
								className: iconStyle,
								key: language.name,
							})}
							<p className='top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-fit text-center absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-350 font-bold text-xl'>
								{language.name}
							</p>
						</span>
					);
				})}
			</div>
			<span className='text-5xl font-extrabold mt-10'>Frameworks</span>
			<div className='flex gap-10 flex-wrap justify-center'>
				{frameworks.map((framework) => {
					return (
						<span className='relative group' key={framework.name}>
							{createElement(framework.icon, {
								className: iconStyle,
								key: framework.name,
							})}
							<p
							className='top-[50%] -translate-y-1/2 left-[50%] -translate-x-1/2 w-fit text-center absolute opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-350 font-bold text-xl'
							>
								{framework.name}
							</p>
						</span>
					);
				})}
			</div>
		</div>
	);
}

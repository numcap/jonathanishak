"use client";

import Image from "next/image";
import { motion, useAnimate } from "motion/react";
import { useEffect, useState } from "react";

export default function Home() {
	const [scope, animate] = useAnimate();
	const [activePage, setActivePage] = useState({
		home: true,
		skills: false,
		career: false,
		projects: false,
		contact: false,
	});

	useEffect(() => {
    const d = document.getElementById("home")
		animate(d, { flexGrow: 1 }, {duration:0.5});
    console.log(d);
	}, []);

	const onPageChange = (e) => {
		document.querySelectorAll("div").forEach((div) => {
			animate(div, { flexGrow: 0 }, {duration: 1});
		});
    animate(e.target, { flexGrow: 1 }, {duration:1});
	};

	// const activePageTW = "border my-20 grow";
	const pageTW = "border my-20 bg-pink-500 w-20";

	return (
		<section
			className='flex flex-col sm:flex-row border border-red-500 h-[100vh] '
			ref={scope}
		>
			<motion.div
      
				id='home'
				className={pageTW}
				onClick={(e) => {
					onPageChange(e);
					setActivePage({
						home: true,
						skills: false,
						career: false,
						projects: false,
						contact: false,
					});
				}}
			>
				This is the home section
			</motion.div>
			<motion.div
				id='skills'
				className={pageTW}
				onClick={(e) => {
					onPageChange(e);
					setActivePage({
						home: false,
						skills: true,
						career: false,
						projects: false,
						contact: false,
					});
				}}
			>
				This is where my skills will be
			</motion.div>
			<motion.div
				id='career'
				className={pageTW}
				onClick={(e) => {
					onPageChange(e);
					setActivePage({
						home: false,
						skills: false,
						career: true,
						projects: false,
						contact: false,
					});
				}}
			>
				career
			</motion.div>
			<motion.div
				id='projects'
				className={pageTW}
				onClick={(e) => {
					onPageChange(e);
					setActivePage({
						home: false,
						skills: false,
						career: false,
						projects: true,
						contact: false,
					});
				}}
			>
				projects
			</motion.div>
			<motion.div
				id='contact'
				className={pageTW}
				onClick={(e) => {
					onPageChange(e);
					setActivePage({
						home: false,
						skills: false,
						career: false,
						projects: false,
						contact: true,
					});
				}}
			>
				contact me
			</motion.div>
		</section>
	);
}

"use client";

import { Analytics } from "@vercel/analytics/react"
import { AnimatePresence, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Home } from "./UI/home";
import { Career } from "./UI/career";
import { Skills } from "./UI/skills";
import { Projects } from "./UI/projects";
import { Contact } from "./UI/contact";
import { BiBriefcase } from "react-icons/bi";
import { IoHome } from "react-icons/io5";
import { LuCodeXml } from "react-icons/lu";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrContactInfo } from "react-icons/gr";
import { TbArrowBigRightFilled } from "react-icons/tb";
import { TbArrowBigLeftFilled } from "react-icons/tb";
export default function MainPage() {
	const [scope, animate] = useAnimate();
	const [activePage, setActivePage] = useState({
		home: true,
		skills: false,
		career: false,
		projects: false,
		contact: false,
	});
	const [isMobile, setIsMobile] = useState(false);
	let animated = true;
	const homeRef = useRef(null);

	const activePageKeys = Object.keys(activePage);

	const handleKeyDown = (e) => {
		const currentIndex = activePageKeys.findIndex((key) => activePage[key]);

		let newIndex;

		if (e.key === "ArrowRight") {
			newIndex = (currentIndex + 1) % activePageKeys.length;
		} else if (e.key === "ArrowLeft") {
			newIndex =
				(currentIndex - 1 + activePageKeys.length) % activePageKeys.length;
		} else {
			return;
		}

		setActivePage((prevPages) => {
			const updatedPages = { ...prevPages };

			updatedPages[activePageKeys[currentIndex]] = false;
			updatedPages[activePageKeys[newIndex]] = true;

			const id = "closed-" + activePageKeys[newIndex];

			const element = document.getElementById(id);

			if (element) {
				const simulatedEvent = new MouseEvent("click", {
					bubbles: true,
					cancelable: true,
					view: window,
				});
				element.dispatchEvent(simulatedEvent);
			} else {
				console.warn(`Element with ID ${id} not found.`);
			}

			return updatedPages;
		});
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [activePage]);

	useEffect(() => {
		animate(
			document.getElementById("home"),
			{ flexGrow: 1 },
			{ duration: 0.5 }
		);
	}, [animate]);

	const checkMobile = () => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
			animated = false;
		} else {
			setIsMobile(false);
			if (!animated) {
				setActivePage({
					home: true,
					skills: false,
					career: false,
					projects: false,
					contact: false,
				});
				animate(
					document.getElementById("home"),
					{ flexGrow: 1 },
					{ duration: 0.5 }
				);
				animated = true;
			}
		}
		console.log(animated);
	};
	

	useEffect(() => {
		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const onPageChange = (e) => {
		const target =
			e.target.className == pageTW ? e.target : e.target.parentElement;

		document.querySelectorAll("div").forEach((div) => {
			animate(div, { flexGrow: 0 }, { duration: 1 });
		});
		animate(target, { flexGrow: 1 }, { duration: 1 });
	};

	const pageTW =
		"border-[0.5px] border-notion-gray md:my-20 bg-notion-default md:w-20";

	return (
		<section
			className='flex flex-col md:flex-row md:h-screen text-notion-text bg-notion-gray_bg overflow-x-hidden'
			ref={scope}
		>
			<Analytics />
			{isMobile ? (
				<>
					<span className={pageTW}>
						<Home />
					</span>
					<span className={pageTW}>
						<Skills />
					</span>
					<span className={pageTW}>
						<h1 className='text-5xl font-extrabold pointer-events-none text-center mt-8'>
							Experience
						</h1>
						<Career />
					</span>
					<span className={pageTW}>
						<h1 className='text-5xl font-extrabold pointer-events-none text-center mt-8'>
							Projects
						</h1>
						<Projects />
					</span>
					<span className={pageTW + " py-32"}>
						<Contact />
					</span>
				</>
			) : (
				<>
					{/* --------- HOME --------- */}
					<motion.div id='home' className={pageTW}>
						<AnimatePresence>
							{activePage.home && (
								<motion.section
									className='h-full w-full'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
								>
									<Home />
								</motion.section>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{!activePage.home && (
								<motion.section
									id='closed-home'
									className='h-full w-full flex-col flex justify-center items-center md:gap-20 md:my-0 gap-4 my-10'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
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
									<IoHome className='w-12 h-10 pointer-events-none' />
									<h1 className='md:-rotate-90 text-3xl pointer-events-none'>
										Home
									</h1>
								</motion.section>
							)}
						</AnimatePresence>
					</motion.div>

					{/* --------- SKILLS --------- */}

					<motion.div id='skills' className={pageTW}>
						<AnimatePresence>
							{activePage.skills && (
								<motion.section
									className='h-full w-full'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.3 } }}
									transition={{ delay: 1, duration: 0.5 }}
								>
									<Skills />
								</motion.section>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{!activePage.skills && (
								<motion.section
									id='closed-skills'
									className='h-full w-full flex-col flex justify-center items-center md:gap-20 md:my-0 gap-4 my-10'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
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
									<LuCodeXml className='w-12 h-10 pointer-events-none' />
									<h1 className='md:md:-rotate-90 text-3xl pointer-events-none'>
										Skills
									</h1>
								</motion.section>
							)}
						</AnimatePresence>
					</motion.div>

					{/* --------- CAREER --------- */}

					<motion.div id='career' className={pageTW}>
						<AnimatePresence>
							{activePage.career && (
								<motion.section
									className='h-full w-full'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
								>
									<Career />
								</motion.section>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{!activePage.career && (
								<motion.section
									id='closed-career'
									className='h-full w-full flex-col flex justify-center items-center md:gap-20 md:my-0 gap-4 my-10'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
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
									<BiBriefcase className='w-12 h-10 pointer-events-none' />
									<h1 className='md:-rotate-90 text-3xl pointer-events-none'>
										Experience
									</h1>
								</motion.section>
							)}
						</AnimatePresence>
					</motion.div>

					{/* --------- PROJECTS --------- */}

					<motion.div id='projects' className={pageTW}>
						<AnimatePresence>
							{activePage.projects && (
								<motion.section
									className='h-full w-full'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
								>
									<Projects />
								</motion.section>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{!activePage.projects && (
								<motion.section
									id='closed-projects'
									className='h-full w-full flex-col flex justify-center items-center md:gap-20 md:my-0 gap-4 my-10'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
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
									<LiaLaptopCodeSolid className='w-12 h-10 pointer-events-none' />
									<h1 className='md:-rotate-90 text-3xl pointer-events-none'>
										Projects
									</h1>
								</motion.section>
							)}
						</AnimatePresence>
					</motion.div>

					{/* --------- CONTACT --------- */}

					<motion.div id='contact' className={pageTW}>
						<AnimatePresence>
							{activePage.contact && (
								<motion.section
									className='h-full w-full'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
								>
									<Contact />
								</motion.section>
							)}
						</AnimatePresence>
						<AnimatePresence>
							{!activePage.contact && (
								<motion.section
									id='closed-contact'
									className='h-full w-full flex-col flex justify-center items-center md:gap-20 md:my-0 gap-4 my-10'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0, transition: { duration: 0.1 } }}
									transition={{ delay: 0.8, duration: 0.5 }}
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
									<GrContactInfo className='w-12 h-10 pointer-events-none' />
									<h1 className='md:-rotate-90 text-3xl pointer-events-none'>
										Contact
									</h1>
								</motion.section>
							)}
						</AnimatePresence>
					</motion.div>
				</>
			)}

			<div className='absolute bottom-0 left-0 bg-notion-default rounded-tr-2xl p-1 px-2 hidden md:block'>
				Navigate by clicking or using{" "}
				<TbArrowBigLeftFilled className='inline' />{" "}
				<TbArrowBigRightFilled className='inline' /> keys
			</div>
			<div className='fixed bottom-0 right-0 bg-notion-default rounded-tl-2xl p-1 px-2'>
				Copyright &copy; Jonathan Ishak 2025
			</div>
		</section>
	);
}

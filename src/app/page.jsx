'use client'

import { Suspense, lazy } from "react";
import { Loading } from "./UI/loading";

export default function MainPage() {

	const Home = lazy(() => import("./homePage"));

	return (
		<Suspense fallback={<Loading />}>
			<Home />
		</Suspense>
	);
}

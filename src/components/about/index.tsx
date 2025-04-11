import React from "react";

export default function About(): JSX.Element {
	return (
		<div>
			<h1 className='text-[54px]'>About</h1>
			<div className='flex flex-row'>
				<div className='w-1/5 m-[1%] border-t-4 border-t-[solid] sm:hidden' />
				<p>
					I am a passionate Frontend Developer from Colombia, with a background
					in Systems Engineering and a specialization in Project Management and
					Business Intelligence. My approach focuses on collaborative work and
					the execution of multidisciplinary tasks. I’m driven by the
					opportunity to learn from new experiences and consider challenges as
					opportunities for growth. My commitment to technology goes beyond just
					completing tasks — for me, it’s a window into discovering logical and
					creative ways to solve problems. I feel inspired by contributing
					innovative ideas that enhance not only my individual performance but
					also the success of the team I work with.
				</p>
			</div>
		</div>
	);
}

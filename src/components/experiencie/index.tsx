import React, { useEffect, useState } from "react";

export default function Experience(): JSX.Element {
	const test =
		"validaciones de los puertos en  de ETB,validaciones los puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos los puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validacioneslos puertos en  de ETB,validaciones";
	const [changeMediaLine, setChangeMediaLine] = useState<string>("h-11");

	useEffect(() => {
		if (test.length <= 60) {
			setChangeMediaLine("h-11");
		} else if (test.length <= 80) {
			setChangeMediaLine("h-52");
		} else if (test.length <= 300) {
			setChangeMediaLine("h-64");
		} else if (test.length > 400) {
			setChangeMediaLine("h-96");
		}
	}, [test]);

	return (
		<div className='flex flex-1 flex-col justify-center'>
			<div className='flex flex-1 flex-row justify-start'>
				<h1 className='text-[54px] mt-[-3%] mb-[-3%] my-[10%]'>Experience</h1>
			</div>
			<div className='mt-[6%]'>
				<div className='flex flex-row justify-start gap-10 px-48  pb-8'>
					<div className='flex flex-row'>
						<div className='w-[5vw] bg-[gray] h-[5vh] flex justify-center items-center'>
							<div>2021</div>
						</div>
						<div
							style={{}}
							className='w-0 h-0 border-l-[24px] border-l-[gray] border-y-[24px] border-y-transparent border-solid border-[transparent_transparent_transparent_#FF4532]'
						/>
					</div>

					<div className='flex flex-col items-center gap-5'>
						<div className='bg-[#f0bf6c] shadow-[0px_1px_20px_#cca25c,inset_7px_7px_14px_#ffdc7c] w-[39px] h-[39px] rounded-[50%]' />
						<div
							className={`${changeMediaLine} border-l-[thick] border-l-[#fff] border-solid`}
						/>
					</div>
					<div className='contenedor'>
						<div>titulo</div>
						<div>sub titulos</div>
						<div>{test}</div>
					</div>
				</div>
				<div className='flex flex-row justify-start gap-10 px-48  pb-8'>
					<div className='flex flex-row'>
						<div className='w-[5vw] bg-[gray] h-[5vh] flex justify-center items-center'>
							<div>2021</div>
						</div>
						<div
							style={{}}
							className='w-0 h-0 border-l-[24px] border-l-[gray] border-y-[24px] border-y-transparent border-solid border-[transparent_transparent_transparent_#FF4532]'
						/>
					</div>

					<div className='flex flex-col items-center gap-5'>
						<div className='bg-[#f0bf6c] shadow-[0px_1px_20px_#cca25c,inset_7px_7px_14px_#ffdc7c] w-[39px] h-[39px] rounded-[50%]' />
						<div
							className={`${changeMediaLine} border-l-[thick] border-l-[#fff] border-solid`}
						/>
					</div>
					<div className='contenedor'>
						<div>titulo</div>
						<div>sub titulos</div>
						<div>{test}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

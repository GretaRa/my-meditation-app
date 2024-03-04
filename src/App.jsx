import Container from "./components/Container";
import { useState } from "react";

function App() {
	const backgrounds = [
		{ id: 1, title: "Rocky river", bgImg: "rocky-river" },
		{ id: 2, title: "Forest", bgImg: "forest" },
	];

	const [bgImage, setBgImage] = useState("forest");

	return (
		<>
			<div
				className={`h-screen bg-forest bg-cover text-xl flex justify-center items-center`}
			>
				<div className=" absolute bottom-6 ">
					{backgrounds.map((background) => (
						<button
							key={background.id}
							className="border border-white rounded-full px-4 py-1 hover:bg-zinc-500 active:bg-zinc-500"
						>
							{background.title}
						</button>
					))}
				</div>
				<div>
					<Container />
				</div>
			</div>
		</>
	);
}

export default App;

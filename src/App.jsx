import Container from "./components/Container";
import { useState } from "react";
import CheckIn from "./components/CheckIn";

function App() {
	const backgrounds = [
		{
			id: 1,
			title: "Rocky river",
			label: "url('../assets/stones_water_stream.jpg",
		},
		{ id: 2, title: "Forest", label: "url('../assets/forest.jpg')" },
	];

	const [backgroundImage, setBackgroundImage] = useState(
		"url('../assets/forest.jpg')"
	);

	const [selectedItem, setSelectedItem] = useState(
		"url('../assets/forest.jpg')"
	);

	const changeBackground = (imageLabel) => {
		setBackgroundImage(imageLabel);
		setSelectedItem(imageLabel);
	};

	return (
		<>
			<div
				className={`h-screen text-xl flex justify-center items-center`}
				style={{
					backgroundImage: backgroundImage,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<CheckIn/>
				<div className=" absolute bottom-6 flex gap-2">
					{backgrounds.map((image) => (
						<div
							key={image.id}
							className="relative m-2 rounded-full backdrop-blur-sm"
						>
							<button
								key={image.id}
								className={`border border-white rounded-full px-4 py-1 hover:bg-zinc-500 bg-blur-md ${
									selectedItem === image.label
										? "bg-zinc-500"
										: "bg-transparent"
								}`}
								onClick={() => changeBackground(image.label)}
							>
								{image.title}
							</button>
						</div>
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

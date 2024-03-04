import SettingsPanel from "./SettingsPanel";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Container() {
	const [selectedAudio, setSelectedAudio] = useState("");
	const [isPlaying, setIsPlaying] = useState(false);

	const handleAudioSelect = (audioLabel) => {
		const audioSource = `src/assets/${audioLabel.toLowerCase()}.mp3`;
		setSelectedAudio(audioSource);
		console.log(audioSource);
	};

	const handlePlayPause = (play) => {
		setIsPlaying(play);
	};

	const sounds = [
		{ id: 1, title: "Alpha waves", label: "AlphaWaves" },
		{ id: 2, title: "Rain", label: "Rain" },
	];

	const duration = [
		{ id: 1, title: "5" },
		{ id: 2, title: "10" },
		{ id: 3, title: "15" },
		{ id: 4, title: "20" },
		{ id: 5, title: "25" },
	];

	const lastMinute = [
		{ id: 1, title: "Yes" },
		{ id: 2, title: "No" },
	];

	return (
		<>
			<div className="flex flex-col gap-4 backdrop-blur-xl border-2 rounded-sm p-8">
				<SettingsPanel
					title={"Sound:"}
					items={sounds}
					onSelect={handleAudioSelect}
				/>
				<SettingsPanel title={"Duration:"} items={duration} />
				<SettingsPanel title={"Last minute warning:"} items={lastMinute} />
				{/* <button className=" border border-white rounded-full px-2 py-1 hover:bg-zinc-500" onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
				<AudioPlayer
					audioSource={selectedAudio}
					isPlaying={isPlaying}
					onPlayPause={handlePlayPause}
				/>
			</div>
		</>
	);
}

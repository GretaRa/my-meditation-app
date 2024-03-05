import SettingsPanel from "./SettingsPanel";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Container() {
	const [selectedAudio, setSelectedAudio] = useState(null);
	const [selectedDuration, setSelectedDuration] = useState(null);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleAudioSelect = (audioLabel) => {
		const audioSource = `assets/${audioLabel.toLowerCase()}.mp3`;
		setSelectedAudio(audioSource);
	};

	const handleDurationSelect = (duration) => {
		setSelectedDuration(duration);
	};

	const handlePlayPause = (play) => {
		setIsPlaying(play);
	};

	const sounds = [
		{ id: 1, title: "Alpha waves", label: "AlphaWaves" },
		{ id: 2, title: "Rain", label: "Rain" },
		{ id: 3, title: "Other", label: "Other" },
	];

	const duration = [
		{ id: 1, title: "5", label: 5 },
		{ id: 2, title: "10",label: 10 },
		{ id: 3, title: "15",label: 15 },
		{ id: 4, title: "20",label: 20 },
		{ id: 5, title: "30",label: 30 },
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
				<SettingsPanel
					title={"Duration:"}
					items={duration}
					onSelect={handleDurationSelect}
				/>
				<SettingsPanel title={"Last minute warning:"} items={lastMinute} />
				{/* <button className=" border border-white rounded-full px-2 py-1 hover:bg-zinc-500" onClick={toggle}>{playing ? "Pause" : "Play"}</button> */}
				<AudioPlayer
					audioSource={selectedAudio}
					isPlaying={isPlaying}
					onPlayPause={handlePlayPause}
					duration={selectedDuration}
				/>
			</div>
		</>
	);
}

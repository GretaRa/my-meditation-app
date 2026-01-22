import SettingsPanel from "./SettingsPanel";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Container() {
	const [selectedAudioLabel, setSelectedAudioLabel] = useState(() =>
		getStored("selectedAudio", "AlphaWaves")
	);
	const [selectedAudio, setSelectedAudio] = useState(() => {
		const label = getStored("selectedAudio", "AlphaWaves");
		return `assets/${label.toLowerCase()}.mp3`});
	const [selectedDuration, setSelectedDuration] = useState(() => getStored("selectedDuration", 5));
	const [warning, setWarning] = useState(() => getStored("warning", true));
	const [isPlaying, setIsPlaying] = useState(false);

	const handleAudioSelect = (audioLabel) => {
		setSelectedAudioLabel(audioLabel)
		const audioSource = `assets/${audioLabel.toLowerCase()}.mp3`;
		setSelectedAudio(audioSource);
		localStorage.setItem("selectedAudio", JSON.stringify(audioLabel));
	};

	const handleDurationSelect = (duration) => {
		setSelectedDuration(duration);
		localStorage.setItem("selectedDuration", duration);
	};

	const handleWarningSelect = (warning) => {
		setWarning(warning);
		localStorage.setItem("warning", JSON.stringify(warning));
	};

	const handlePlayPause = (play) => {
		setIsPlaying(play);
	};

	function getStored (key, fallback) {
		const stored = localStorage.getItem(key);
		return stored !== null ? JSON.parse(stored) : fallback;
	}

	const sounds = [
		{ id: 1, title: "Alpha waves", label: "AlphaWaves" },
		{ id: 2, title: "Rain", label: "Rain" },
		{ id: 3, title: "Piano", label: "Piano" },
	];

	const duration = [
		{ id: 1, title: "5", label: 5 },
		{ id: 2, title: "10", label: 10 },
		{ id: 3, title: "15", label: 15 },
		{ id: 4, title: "20", label: 20 },
		{ id: 5, title: "30", label: 30 },
	];

	const lastMinute = [
		{ id: 1, title: "Yes", label: true },
		{ id: 2, title: "No", label: false },
	];

	return (
		<>
			<div className="flex flex-col gap-4 backdrop-blur-xl border-2 rounded-sm p-8">
				<SettingsPanel
					title={"Sound:"}
					items={sounds}
					onSelect={handleAudioSelect}
					defaultSelectedLabel={selectedAudioLabel}
				/>
				<SettingsPanel
					title={"Duration:"}
					items={duration}
					onSelect={handleDurationSelect}
					defaultSelectedLabel={selectedDuration}
				/>
				<SettingsPanel
					title={"Last minute warning:"}
					items={lastMinute}
					onSelect={handleWarningSelect}
					defaultSelectedLabel={warning}
				/>
				<AudioPlayer
					audioSource={selectedAudio}
					secondaryAudioSource={"assets/one-minute-warning-13sec.mp3"}
					playSecondaryAtOneMinute={warning}
					isPlaying={isPlaying}
					onPlayPause={handlePlayPause}
					duration={selectedDuration}
				/>
			</div>
		</>
	);
}

import SettingsPanel from "./SettingsPanel";
import { useState } from "react";
import AudioPlayer from "./AudioPlayer";

export default function Container() {
	const [selectedAudio, setSelectedAudio] = useState();
	const [selectedDuration, setSelectedDuration] = useState();
	const [warning, setWarning] = useState();
	const [isPlaying, setIsPlaying] = useState(false);

	const handleAudioSelect = (audioLabel) => {
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
		localStorage.setItem("selectedWarning", JSON.stringify(warning));
	};

	const handlePlayPause = (play) => {
		setIsPlaying(play);
	};

	const getDefault = (storageKey, defaultSetting) => {
		const saved = JSON.parse(localStorage.getItem(`${storageKey}`));
		return saved !== null ? saved : defaultSetting;
	};

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
					defaultSelectedLabel={getDefault("selectedAudio", "AlphaWaves")}
				/>
				<SettingsPanel
					title={"Duration:"}
					items={duration}
					onSelect={handleDurationSelect}
					defaultSelectedLabel={getDefault("selectedDuration", 5)}
				/>
				<SettingsPanel
					title={"Last minute warning:"}
					items={lastMinute}
					onSelect={handleWarningSelect}
					defaultSelectedLabel={getDefault("selectedWarning", true)}
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

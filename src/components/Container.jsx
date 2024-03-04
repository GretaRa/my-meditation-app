import { useAudio } from "./useAudio";
import SettingsPanel from "./SettingsPanel";
import AlphaWaves from "../assets/alpha-waves-5min-2sec.flac"
import RainSound from "../assets/src_assets_audio_rain-in-forest-5min-2sec.mp3"
import { useState } from "react";


export default function Container() {
	const [sound, setSound] = useState(AlphaWaves)
	const [playing, toggle] = useAudio(sound);

	const sounds = [
		{ id: 1, title: "Alpha waves", audioUrl: '../assets/alpha-waves-5min-2sec.flac' },
		{ id: 2, title: "Rain", audioUrl: '../assets/src_assets_audio_rain-in-forest-5min-2sec.mp3' },
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
 function select (item){
	setSound(RainSound)
	console.log(item.audioUrl);
 }
 

	return (
		<>
			<div className="flex flex-col gap-4 backdrop-blur-xl border-2 rounded-sm p-8">
				<SettingsPanel title={"Sound:"} items={sounds} click={select} />
				<SettingsPanel title={"Duration:"} items={duration} />
				<SettingsPanel title={"Last minute warning:"} items={lastMinute} />
				<button className=" border border-white rounded-full px-2 py-1 hover:bg-zinc-500" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
				
			</div>
		</>
	);
}

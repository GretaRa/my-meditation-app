import { useState, useRef, useEffect } from "react";

const AudioPlayer = ({ audioSource, isPlaying, onPlayPause }) => {
	const audioRef = useRef(null);
	const [playing, setPlaying] = useState(isPlaying);

	useEffect(() => {
		console.log(audioSource);
		if (audioRef.current) {
			if (audioSource) {
				audioRef.current.src = audioSource;
				if (playing) {
					audioRef.current.play();
				}
			} else {
				audioRef.current.pause();
				setPlaying(false);
			}
		}
	}, [audioSource, playing]);

	const handlePlayPause = () => {
		if (audioRef.current) {
			if (playing) {
				audioRef.current.pause();
			} else {
				audioRef.current.play();
			}
			setPlaying(!playing);
			onPlayPause(!playing);
		}
	};

	return (
		<div>
			<audio ref={audioRef} />
			<button className=" border border-white rounded-full px-2 py-1 hover:bg-zinc-500" onClick={handlePlayPause}>{playing ? "Pause" : "Play"}</button>
		</div>
	);
};

export default AudioPlayer;

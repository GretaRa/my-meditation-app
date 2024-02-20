import SettingsPanel from "./SettingsPanel";

export default function Container() {
	const sounds = [
		{ id: 1, title: "Alpha waves" },
		{ id: 2, title: "Rain" },
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
			<div className="flex flex-col gap-4 backdrop-blur-xl border-2 rounded-sm p-4">
				<SettingsPanel title={"Sound:"} items={sounds} />
				<SettingsPanel title={"Duration:"} items={duration} />
				<SettingsPanel title={"Last minute warning:"} items={lastMinute} />
				<button className=" border border-white rounded-full px-2 hover:bg-zinc-500">Start</button>
			</div>
		</>
	);
}

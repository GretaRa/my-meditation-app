export default function SettingsPanel({title, items}) {

	return (
		<div className="flex gap-4 md:flex-row flex-col">
			<h2>{title}</h2>
			<div className="flex gap-2">
				{items.map((item) => (
					<button key={item.id} className="border border-white rounded-full px-2 hover:bg-zinc-500 active:bg-zinc-500">{item.title}</button>
				))}
			</div>
		</div>
	);
}

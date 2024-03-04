export default function SettingsPanel({title, items, click}) {


	return (
		<div className="flex gap-4 md:flex-row flex-col">
			<h2>{title}</h2>
			<div className="flex gap-2">
				{items.map((item) => (
					<button key={item.id} value={item.id} onClick={() => click(item)} className="border border-white rounded-full px-4 py-1 hover:bg-zinc-500 active:bg-zinc-500">{item.title}</button>
				))}
			</div>
		</div>
	);
}

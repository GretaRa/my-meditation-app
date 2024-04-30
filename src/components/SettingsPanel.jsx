import { useState } from "react";
export default function SettingsPanel({ title, items, onSelect, defaultSelectedLabel }) {
	const [selectedItem, setSelectedItem] = useState(defaultSelectedLabel || '');

	const handleClick = (item) => {
		onSelect(item.label);
		setSelectedItem(item.label);
	};

	return (
		<div className="flex gap-4 md:flex-row flex-col">
			<h2>{title}</h2>
			<div className="flex gap-2">
				{items.map((item) => (
					<button
						key={item.id}
						value={item.id}
						onClick={() => handleClick(item)}
						className={`border border-white rounded-full px-4 py-1 hover:bg-zinc-500 ${
							selectedItem === item.label ? "bg-zinc-500" : "bg-transparent"
						}`}
					>
						{item.title}
					</button>
				))}
			</div>
		</div>
	);
}

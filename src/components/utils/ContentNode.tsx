import './panels.css';

export interface Line {
	type: string;
	id?: string;
	class: string[];
	value?: string | string[];
	function?: any;
	node?: Node;
}

export function ContentNodeBuilder(content: Line[], container?: Node) {
	let contentContainer: any;

	contentContainer = document.createElement('div') as HTMLDivElement;
	contentContainer.classList.add('contentContainer');
	if (container != null) {
		contentContainer = container;
	}
	content.forEach((item) => {
		switch (item.type) {
			case 'label': {
				const label = document.createElement('calcite-label');
				label.classList.add('boldText');
				label.classList.add.apply(label.classList, [...item.class]);
				label.textContent = item.value as string;
				contentContainer.appendChild(label);
				break;
			}
			case 'value': {
				const value = document.createElement('calcite-label');
				value.classList.add.apply(value.classList, [...item.class]);
				value.textContent = item.value as string;
				contentContainer.appendChild(value);
				break;
			}
			case 'button': {
				const viewButton = document.createElement('calcite-button');
				viewButton.id = item.id as string;
				viewButton.textContent = item.value as string;
				viewButton.addEventListener('click', item.function);
				contentContainer.appendChild(viewButton);
				break;
			}
			case 'function': {
				item.function(contentContainer);
				break;
			}
			case 'line': {
				const line = document.createElement('div');
				line.classList.add('line');
				contentContainer.appendChild(line);
				break;
			}
			case 'link': {
				const link = document.createElement('a');
				link.classList.add.apply(link.classList, [...item.class]);
				link.textContent = item.value as string;
				contentContainer.appendChild(link);
				break;
			}
			case 'select': {
				const select = document.createElement(
					'calcite-select'
				) as HTMLCalciteSelectElement;
				(item.value as string[]).forEach((radius) => {
					const selectItem = document.createElement(
						'calcite-option'
					) as HTMLCalciteOptionElement;
					selectItem.value = radius;
					selectItem.textContent = radius;
					select.appendChild(selectItem);
				});
				contentContainer.appendChild(select);
				break;
			}
			case 'node': {
				contentContainer.appendChild(item.node);
				break;
			}
			case 'focus-item': {
				const label = document.createElement(
					'calcite-label'
				) as HTMLCalciteLabelElement;
				label.layout = 'inline';
				label.classList.add.apply(label.classList, [...item.class]);
				label.textContent = item.value as string;

				const icon = document.createElement(
					'calcite-icon'
				) as HTMLCalciteIconElement;
				icon.id = item.id as string;
				icon.icon = 'data-clock-chart';
				icon.scale = 's';
				icon.addEventListener('click', item.function);
				label.appendChild(icon);

				contentContainer.appendChild(label);
				break;
			}
			case 'tooltip': {
				const tooltip = document.createElement(
					'calcite-tooltip'
				) as HTMLCalciteTooltipElement;
				tooltip.referenceElement = item.id as string;
				const message = document.createElement('span');
				message.textContent = item.value as string;
				tooltip.appendChild(message);
				contentContainer.appendChild(tooltip);
			}
		}
	});
	return contentContainer as HTMLDivElement;
}

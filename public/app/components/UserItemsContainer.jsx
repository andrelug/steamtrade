import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class UserItemsContainer extends React.Component {
	componentWillMount() {
		this.props.items.fetchAll();
	}

	filter(e) {
		this.props.items.filter = e.target.value;
	}

	render() {
		const { filteredItems, filter } = this.props.items;
		const itemsList = filteredItems.map(item => (
			<li key={item._id}>{item.title}</li>
		))

		return(
			<div className="col-md-5 col-xs-6 col-md-pull-2">
				<h2>Filtro</h2>
				<div>{filter}</div>
				<input className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>{itemsList}</ul>
			</div>
		)
	}
}

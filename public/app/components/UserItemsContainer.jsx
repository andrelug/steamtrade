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
				<div className="offerContainer">
					<div className="offerHead">
						<div className="row">
							<div className="col-xs-6">
								<h2>YOUR OFFER</h2>
								<input className="filter" value={filter} onChange={this.filter.bind(this)} />
							</div>
							<div className="col-xs-6">
								<h3>0.00 <span className="curency">US$</span></h3>
							</div>
						</div>
					</div>
					<div className="offerBody">
						<div className="offerText">

						</div>
						<div className="offerItems">
							<ul>{itemsList}</ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

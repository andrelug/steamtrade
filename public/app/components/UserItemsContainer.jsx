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
			<div className="col-md-5 col-sm-6 col-md-pull-2" id="userItemsContainer">
				<div className="inventoryContainer">
					<div className="offerHead">
						<div className="row">
							<div className="col-xs-1">
								<img src="/images/refresh.svg" alt="reload button" className="refresh" />
							</div>
							<div className="col-xs-4 text-center">
								<div className="drop">
									<button className="dropbtn">ORDER BY <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">MOST RECENT</a>
										<a href="#">HIGHEST PRICE</a>
										<a href="#">LOWEST PRICE</a>
								  	</div>
								</div>
							</div>
							<div className="col-xs-4 col-xs-offset-3">
								<input className="search" value={filter} onChange={this.filter.bind(this)} placeholder="Search:" />
							</div>
						</div>
					</div>
					<div className="offerBody">
						<div className="offerText text-center">
							<p>SIGN IN WITH STEAM TO DISPLAY YOUR ITEMS HERE</p>
							<a href="#"><img src="/images/steam.png" alt="log in with steam" /></a>
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

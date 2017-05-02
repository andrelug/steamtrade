import React from 'react';
import OfferButtons from './offerButtons.jsx';
import OfferContainer from './offerContainer.jsx';
import ReceiverContainer from './receiverContainer.jsx';
import ItemsFilters from './itemsFilters.jsx';
import UserItemsContainer from './userItemsContainer.jsx';
import BotItems from './botItems.jsx';
import Items from './../stores/items.jsx';

export default class Container extends React.Component {

	render() {
		return(
			<div className="container-fluid">
				<div className="row">
					<OfferButtons />
					<OfferContainer />
					<ReceiverContainer />
				</div>
				<div className="row">
					<ItemsFilters />
					<UserItemsContainer items={Items} />
					<BotItems />
				</div>
			</div>
		)
	}
}

import React from 'react';

export default class OfferButtons extends React.Component {
	render() {
		return(
			<div className="col-md-2 col-sm-12 col-md-push-5 text-center pullDown">
				<a href="#" className="btn btn-main">
					TRADE
				</a>
				<a href="#" className="btn btn-auto">
					AUTO<br />SELECT
				</a>
			</div>
		)
	}
}

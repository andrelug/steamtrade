import React from 'react';

export default class OfferContainer extends React.Component {
	render() {
		return(
			<div className="col-md-5 col-sm-6 col-md-pull-2" id="offerContainer">
				<div className="offerContainer">
					<div className="offerHead">
						<div className="row">
							<div className="col-xs-6">
								<h2>YOUR OFFER</h2>
							</div>
							<div className="col-xs-6 text-right">
								<h2>0.00 <span className="curency">US$</span></h2>
							</div>
						</div>
					</div>
					<div className="offerBody">
						<div className="offerText text-center">
							<p>SELECT THE ITEMS YOU WANT TO OFFER<br />FROM THE INVENTORY BOX BELOW</p>
						</div>
						<div className="offerItems">
						</div>
					</div>
				</div>
			</div>
		)
	}
}

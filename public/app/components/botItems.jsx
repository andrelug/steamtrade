import React from 'react';

export default class BotItems extends React.Component {
	render() {
		return(
			<div className="col-md-5 col-sm-6" id="botItems">
				<div className="inventoryContainer">
					<div className="offerHead">
						<div className="row">
							<div className="col-xs-4">
								<input className="search" value="" onChange="" placeholder="Search:" />
							</div>
							<div className="col-xs-2 col-xs-offset-1">
								<div className="drop">
									<button className="dropbtn">BOTS <span className="caret"></span></button>
									<div className="drop-content container">
										<div className="row">
											<div className="col-xs-12">
												<a href="#">ALL BOTS</a>
											</div>
										</div>
										<div className="row">
											<div className="col-xs-4 text-center">
												<a href="#">1</a>
											</div>
											<div className="col-xs-4 text-center">
												<a href="#">2</a>
											</div>
											<div className="col-xs-4 text-center">
												<a href="#">3</a>
											</div>
										</div>
								  	</div>
								</div>
							</div>
							<div className="col-xs-4 text-center ">
								<div className="drop">
									<button className="dropbtn">ORDER BY <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">MOST RECENT</a>
										<a href="#">HIGHEST PRICE</a>
										<a href="#">LOWEST PRICE</a>
								  	</div>
								</div>
							</div>

							<div className="col-xs-1">
								<img src="/images/refresh.svg" alt="reload button" className="refresh" />
							</div>
						</div>
					</div>
					<div className="offerBody">
						<div className="offerText text-center">
							<p>IT SEEMS WE ARE A LITTLE SHORT ON ITEMS</p>
							<small>PLEASE COME BACK IN A MOMENT OR CLICK THE REFRESH BUTTON</small>
						</div>
						<div className="offerItems">
							<ul></ul>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

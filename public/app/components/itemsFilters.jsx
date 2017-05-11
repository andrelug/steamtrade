import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class ItemsFilters extends React.Component {
	render() {

		return(
			<div className="col-md-2 col-sm-12 col-md-push-5 pullDown">
				<div className="filterContainer">
					<div className="filterHead">
						<div className="row">
							<div className="col-xs-12 text-center">
								<h3>BOT FILTERS</h3>
							</div>
						</div>
					</div>
					<div className="filterBody">
						<div className="filterPrice text-center">
							<h3>PRICE</h3>
						</div>
						<div className="filterSlider">
							<div className="row">
								<div className="col-xs-5 col-xs-offset-1 text-center">
									<span className="filterValues">0</span>
								</div>
								<div className="col-xs-5 text-center">
									<span className="filterValues">3500</span>
								</div>
							</div>
							<div className="row">
								<div className="col-xs-12" id="slider">

								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-10 col-xs-offset-1 text-center">
								<div className="drop">
									<button className="dropbtn">TYPE <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">Knifes</a>
										<a href="#">Keys</a>
										<a href="#">Rifle</a>
										<a href="#">Sniper Rifle</a>
								  	</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-xs-10 col-xs-offset-1 text-center">
								<div className="drop">
									<button className="dropbtn">EXTERIOR <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">FACTOR NEW</a>
										<a href="#">MINIMAL WEAR</a>
										<a href="#">FIELD-TESTED</a>
										<a href="#">WELL-WORN</a>
										<a href="#">BATTLE-SCARRED</a>
								  	</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="ratesContainer">
					<div className="ratesHead">
						<div className="row">
							<div className="col-xs-12 text-center">
								<h3>MARKET RATES</h3>
							</div>
						</div>
					</div>
					<div className="ratesBody text-center">
						<div className="ratesKeys rates">
							<p>Keys<br />100% / 105%</p>
						</div>
						<div className="ratesKnives rates">
							<p>Knives<br />95% / 100%</p>
						</div>
						<div className="ratesWeapons rates">
							<p>Weapons<br />95% / 100%</p>
						</div>
						<div className="ratesMisc rates">
							<p>Misc<br />85% / 90%</p>
						</div>
						<a href="#" className="btn btn-auto">MORE</a>
						<a href="#" className="btn-bonus">GET 2% BONUS</a>
					</div>
				</div>
			</div>
		)
	}
}

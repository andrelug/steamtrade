import React from 'react';

export default class Footer extends React.Component {
	render () {
		return (
			<footer>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-6">
							<p>Ⓒ 2017 CSGOSKINS</p>
						</div>
						<div className="col-md-6 text-right">
							<ul>
								<li>
									<a href="#">FACEBOOK</a>
								</li>
								<li>
									<a href="#">TWITTER</a>
								</li>
							</ul>
							<h4></h4>

						</div>
					</div>
				</div>
			</footer>
		)
	}
}

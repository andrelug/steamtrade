import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';

export default class Menu extends React.Component {
    render() {
        return (
            <nav role="navigation" className="navbar navbar-default">
                <div className="container-fluid menu">
                    <div className="navbar-header">
                        <button type="button" data-toggle="collapse" data-target="#menuDiv" aria-expanded="false" className="navbar-toggle collapsed">
                            <span className="sr-onlyToggle">navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">
							<img src="/images/logo_white.png" alt="logo" />
						</a>
                    </div>
                    <div id="menuDiv" className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li>
                                <a href="/api/login">
									<img src="/images/steam_menu.png" alt="steam login menu" /></a>
                            </li>
						</ul>

                        <ul className="nav navbar-nav navbar-menu">
                            <li>
                                <a href="/">TRADE</a>
                            </li>
                            <li>
                                <a data-toggle="modal" data-target="#popBots" className="modal">BOTS</a>
                            </li>
                            <li>
                                <a href="/about">ABOUT</a>
                            </li>
							<li>
								<div className="drop">
									<button className="dropbtn">ENG <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">PT</a>
										<a href="#">ESP</a>
									</div>
								</div>
							</li>
							<li>
								<div className="drop">
									<button className="dropbtn">US$ <span className="caret"></span></button>
									<div className="drop-content">
										<a href="#">R$</a>
										<a href="#">EU</a>
									</div>
								</div>
							</li>


                        </ul>


                    </div>

                </div>
            </nav>
        )
    }
}

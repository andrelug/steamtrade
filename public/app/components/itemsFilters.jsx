import React from 'react';
import { observer } from 'mobx-react';

@observer
export default class ItemsFilters extends React.Component {
	render() {

		return(
			<div className="col-md-2 col-xs-12 col-md-push-5">
				<h1>Filtros</h1>
			</div>
		)
	}
}

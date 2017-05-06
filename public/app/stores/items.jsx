import { computed, observable, action } from 'mobx';

class ItemsStore {
	@observable all = [];
	@observable isLoading = false;

	@action async fetchAll() {
		this.isLoading = false;
		const response = await fetch('http://localhost:3000/api/items', { credentials : 'same-origin' });
		const status = await response.status;


		if ( status === 200 ) {
			this.all = await response.json();
		}
	}

	@observable filter = "";
	@computed get filteredItems() {
		const matchesFilter = new RegExp(this.filter, "i");
		if (this.all.data) {
			return this.all.data.filter(item => !this.filter || matchesFilter.test(item.title));
		} else {
			return []
		}

	}
}

const Items = window.store = new ItemsStore;

export default Items;

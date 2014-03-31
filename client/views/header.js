this.Template.header.helpers({
	storeName: function () {
		console.log(currentStore);
		return currentStore && currentStore.storeName; // || 'Store';
	}
});
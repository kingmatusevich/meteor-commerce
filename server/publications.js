Meteor.publish('categories', function() {
	return Categories.find();
});
Meteor.publish('products', function() {
	return Products.find();
});
Meteor.publish('stores', function() {
	return Stores.find();
});

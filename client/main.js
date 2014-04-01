Meteor.subscribe('products');
Meteor.subscribe('categories');
Meteor.subscribe('stores');
Deps.autorun(function() {
	currentStore = Stores && Stores.findOne();

});

Template.news.helpers({
	heading: function() {
		return Stores && currentStore && currentStore.heading; // || 'This is a default title!';
	},
	lead: function() {
		return Stores && currentStore && currentStore.lead; // || 'Get to work, you lazy bum!';
	},
	buttonText: function() {
		return Stores && currentStore && currentStore.buttonText; // || 'Get crackin';
	}
});

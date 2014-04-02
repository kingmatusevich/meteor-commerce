Router.configure({
	layoutTemplate: 'layout',
//	loadingTemplate: 'loading',
	waitOn: function() {
		return (Meteor.subscribe('products') && Meteor.subscribe('stores'));
	},
	fastRender: true
});

Router.map(function() {
	this.route('productsDisplay', {
		path: '/',
		data: function() {
			currentStore = Stores.findOne();
			var v = Products.find({
				sections: {
					$in: ['featured']
				}
			});
			return _.extend(v, currentStore);
		},
		onAfterAction: function() {
			Session.set('activeCategory', 'all');
			Session.set('activeSection', 'home')
		}
	});
	this.route('about', {
		path: '/section/about',
		data: function() {
			currentStore = Stores.findOne();
			
			newContext = {aboutTitle:"My dynamic title", aboutHTML:"<p>My cute HTML</p>"};
			var v = _.extend(newContext, currentStore);
			console.log(v);
			return v;
		},
		onAfterAction: function() {
			Session.set('activeSection', 'about');
			Session.set('activeCategory', 'all');
		}
	});
	this.route('productsDisplay', {
		path: '/section/:section',
		data: function() {
			currentStore = Stores.findOne();
			var v = Products.find({
				sections: {
					$in: [this.params.section]
				}
			});
			return _.extend(v, currentStore);
		},
		onAfterAction: function() {
			Session.set('activeCategory', 'all');
			Session.set('activeSection', this.params.section)
		}
	});
	this.route('productsDisplay', {
		path: '/section/:section/category/:category',
		data: function() {
			currentStore = Stores.findOne();
			var cat = Categories.findOne({
				category: this.params.category
			});
			if (cat) {
				var g = Products.find({
					$and: [{
						sections: {
							$in: [this.params.section]
						}
					}, {
						categories: {
							$in: [cat._id]
						}
					}]
				});
				return _.extend(g, currentStore);
			}
			var v = Products.find({
				sections: {
					$in: [this.params.section]
				}
			});
			return _.extend(v, currentStore);
		},
		onAfterAction: function() {
			Session.set('activeCategory', this.params.category);
			Session.set('activeSection', this.params.section);
		}
	});
});

Handlebars.registerHelper("activeCategory", function(nav) {
	return Session.equals("activeCategory", nav) ? "active" : "";
});

Handlebars.registerHelper("activeSection", function(nav) {
	return Session.equals("activeSection", nav) ? "active" : "";
});

Handlebars.registerHelper("sectionPath", function(nav) {
	var secact = Session.get('activeSection');

	if (secact == 'home') {
		secact = 'featured';
	}
	return '/section/' + secact + '/category/' + nav;
});

Handlebars.registerHelper("sectionPathSimple", function() {
	if (Session.get('activeCategory') == 'all') {
		return '#';
	}
	if (Session.get('activeSection' == 'home')) {
		return '/';
	}
	return '/section/' + Session.get("activeSection");
});

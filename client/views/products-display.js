Template.productsDisplay.helpers({
  categories: function ()
  {    	 
    	return Categories.find();
  },
  currentCategoryMessage: function () {
	  var sec = Session.get('activeSection');
	  var cat = Session.get('activeCategory');
	  if (sec == 'home'){sec = 'featured';}
	  if (cat == 'all') {cat = 'products';}
	  sec = sec[0].toUpperCase() + sec.substring(1);
	  cat = cat[0].toUpperCase() + cat.substring(1);
	  if (sec == 'Offers') {
		  var message = cat + ' on Sale';
		  return message;
	  }
	  var message = sec + ' ' + cat;
	  return message;
  }
});
if (Categories.find().count() === 0)
{
	var fix1 = Categories.insert({
		category: 'shoes'
	});
	var fix3 = Categories.insert({
		category: 'overcoats'
	});
}

if (Products.find().count() === 0) {
  Products.insert({
    name: 'Common Product 1',
	shortDescription: 'great product',
	categories: [fix1],
	sections: ['featured'],
	images: ['/boiler.png']
  });

  Products.insert({
    name: 'Common Product 2',
	shortDescription: 'not so great product',
	categories: [fix3], 
	sections: ['featured'], 
	images: ['/boiler.png']
  });

  Products.insert({
    name: 'Common Product Meh 2',
	categories: [fix3], 
	shortDescription: 'not so not great product',
	sections: ['offers'],
	images: ['/boiler.png']
  });
  Products.insert({
    name: 'Common Product Meh 3',
	categories: [fix1], 
	shortDescription: 'not so not no no great product',
	sections: ['offers', 'popular', 'newest'],
	images: ['/boiler.png']
  });
  Products.insert({
    name: 'Hey product 4',
	categories: [fix3], 
	shortDescription: 'not a great product',
	sections:  ['featured','popular', 'newest'],
	images: ['/boiler.png']
  });
  Products.insert({
    name: 'Overcoat me',
	categories: [fix3], 
	shortDescription: 'not a great product',
	sections:  ['newest'],
	images: ['/boiler.png']
  });
}

if (Stores.find().count() === 0) {
	Stores.insert({
		storeName : 'My Store',
		heading: 'This is a nice heading!',
		lead: 'This lead is cute, right?',
		buttonText: 'Click me, Im hot'
	})
}
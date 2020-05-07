var gems = [{
	name: "Azurite",
	description: "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
	price: 110.50,
	canPurchase: true,
	specs: {
		faces: 14,
		color: "#CCC",
		rarity: 7,
		shine: 8
	},
	images: [
		{
			url:"images/gem-02.gif",
			number: 0
		},
		{
			url:"images/gem-05.gif",
			number: 1

		},
		{
			url:"images/gem-09.gif",
			number: 2

		}
	],
	reviews: [{
		stars: 5,
		body: "I love this gem!",
		author: "joe@example.org",
		createdOn: 1397490980837
	}, {
		stars: 1,
		body: "This gem sucks.",
		author: "tim@example.org",
		createdOn: 1397490980837
	}]
}, {
	name: "Bloodstone",
	description: "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
	price: 22.90,
	canPurchase: true,
	specs: {
		faces: 12,
		color: "#EEE",
		rarity: 6,
		shine: 9
	},
	images: [
		"images/gem-01.gif",
		"images/gem-03.gif",
		"images/gem-04.gif"
	],
	reviews: [{
		stars: 3,
		body: "I think this gem was just OK, could honestly use more shine, IMO.",
		author: "JimmyDean@example.org",
		createdOn: 1397490980837
	}, {
		stars: 4,
		body: "Any gem with 12 faces is for me!",
		author: "gemsRock@example.org",
		createdOn: 1397490980837
	}]
}, {
	name: "Zircon",
	description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
	price: 1100,
	specs: {
		faces: 6,
		color: "#000",
		rarity: 2,
		shine: 70
	},
	images: [
		"images/gem-06.gif",
		"images/gem-07.gif",
		"images/gem-10.gif"
	],
	reviews: [{
		stars: 1,
		body: "This gem is WAY too expensive for its rarity value.",
		author: "turtleguyy@example.org",
		createdOn: 1397490980837
	}, {
		stars: 1,
		body: "BBW: High Shine != High Quality.",
		author: "LouisW407@example.org",
		createdOn: 1397490980837
	}, {
		stars: 1,
		body: "Don't waste your rubles!",
		author: "nat@example.org",
		createdOn: 1397490980837
	}]
}];

(function(){
	var app = angular.module('store-products', []);
	app.directive('productTitle', function(){});
	app.directive('productGallery', function(){});
	app.directive('productPanels', function(){});
})();

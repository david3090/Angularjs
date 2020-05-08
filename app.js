

(function() {
  var app = angular.module('store', ['store-directives'])

  app.controller("ReviewController", function(){
    this.review = {}
    this.addReview = function(product){
      product.reviews.push(this.review)
      this.review = {}
    }
  })

  app.controller('StoreController', function(){
    this.products = gems;
  })

  //gems data
  let gems = [
    { 
      name:"Dodecahedron",
      price: 2,
      description: "Dodecahedron is very hard to broke, its a gem very nice",
      specs: [
        {
        faces: 14,
        color: "#000",
        rarity: 10,
        shine: 30
      }
    ],
      images:[
        {
          url:"../img/gem-02.gif",
          number: 0
        },
        {
          url:"../img/gem-05.gif",
          number: 1
    
        },
        {
          url:"../img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"david_3090@hotmail.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"david_3090@hotmail.com",
                }
              ]
    }, 
    {
      name:"Pentagonal Gem",
      price: 5.95,
      description: "this gem is so good to have fun",
      specs: [
        {
        faces: 5,
        color: "#000",
        rarity: 6,
        shine: 10
      }
    ],
      images:[
        {
          url:"../img/gem-02.gif",
          number: 0
        },
        {
          url:"../img/gem-05.gif",
          number: 1
    
        },
        {
          url:"../img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"david_3090@hotmail.com",
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"david_3090@hotmail.com",
                }
              ]
    },
    {
      name:"Azurite",
      price: 110.5,
      description: "Some gems have hidden qualities beyond their luster.",
      specs: [
        {
        faces: 14,
        color: "#000",
        rarity: 7,
        shine: 8
      }
    ],
      images:[
        {
          url:"../img/gem-02.gif",
          number: 0
        },
        {
          url:"../img/gem-05.gif",
          number: 1
    
        },
        {
          url:"../img/gem-09.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"david_3090@hotmail.com",
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"david_3090@hotmail.com",
                },
                {
                  "stars": 5,
                  "body": "I love this gem!",
                  "author": "david_3090@hotmail.com",
                }
              ]
    },
    {
      name:"Bloodstone",
      price: 22.9,
      description: "Origin of the Bloodstone is unknown, hence its low value.",
      specs: [
        {
        faces: 12,
        color: "#000",
        rarity: 6,
        shine: 9
      }
    ],
      images:[
        {
          url:"../img/gem-09.gif",
          number: 0
        },
        {
          url:"../img/gem-08.gif",
          number: 1
    
        },
        {
          url:"../img/gem-07.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"david_3090@hotmail.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"david_3090@hotmail.com"
                },
                {
                  stars: 3,
                  body: "I think this gem was just OK, could honestly use more shine, IMO.",
                  author: "david_3090@hotmail.com",
                }
              ]
    },
    {
      name:"Zircon",
      price: 1100,
      description: "Zircon is our most coveted and sought after gem.",
      specs: [
        {
        faces: 6,
        color: "#000",
        rarity: 2,
        shine: 70
      }
    ],
      images:[
        {
          url:"../img/gem-02.gif",
          number: 0
        },
        {
          url:"../img/gem-04.gif",
          number: 1
    
        },
        {
          url:"../img/gem-08.gif",
          number: 2
    
        }
      ],
      canPurchase: true,
      soldOut: false,
      reviews:[
                {
                  stars: 5,
                  body:"I love this product!",
                  author:"david_3090@hotmail.com"
                },
                {
                  stars:1,
                  body:"This product sucks",
                  author:"david_3090@hotmail.com"
                },
                {
                  stars: 1,
                  body: "This gem is WAY too expensive for its rarity value.",
                  author: "david_3090@hotmail.com",
                }
              ]
    }
] 
})()

const coupons=[
        {
          "_id": 1,
          "title": "10% Off Your Next Purchase",
          "description": "Get 10% off your next purchase of $50 or more.",
          "category": "Discount",
          "code": "DISC10",
          "active": true,
          "expirationDate": "2024-12-31T23:59:59.000Z",
          "usageLimit": 1,
          "usedCount": 0,
          "user": 1
        },
        {
          "_id": 2,
          "title": "Free Shipping",
          "description": "Enjoy free shipping on orders over $100.",
          "category": "Shipping",
          "code": "FREESHIP",
          "active": true,
          "expirationDate": "2024-11-30T23:59:59.000Z",
          "usageLimit": 3,
          "usedCount": 1,
          "user": 2
        },
        {
          "_id": 3,
          "title": "$20 Off Your Purchase",
          "description": "$20 off on a purchase of $100 or more.",
          "category": "Discount",
          "code": "SAVE20",
          "active": true,
          "expirationDate": "2024-10-15T23:59:59.000Z",
          "usageLimit": 2,
          "usedCount": 0,
          "user": 1
        },
        {
          "_id": 4,
          "title": "Buy One Get One Free",
          "description": "Buy one item and get another free.",
          "category": "Offer",
          "code": "BOGO",
          "active": true,
          "expirationDate": "2024-12-01T23:59:59.000Z",
          "usageLimit": 5,
          "usedCount": 2,
          "user": 4
        },
        {
          "_id": 5,
          "title": "25% Off Sitewide",
          "description": "Get 25% off all items on the site.",
          "category": "Discount",
          "code": "SITE25",
          "active": false,
          "expirationDate": "2024-09-30T23:59:59.000Z",
          "usageLimit": 1,
          "usedCount": 0,
          "user": 5
        },
        {
          "_id": 6,
          "title": "Free Gift with Purchase",
          "description": "Receive a free gift with any purchase over $75.",
          "category": "Offer",
          "code": "FREEGIFT",
          "active": true,
          "expirationDate": "2024-11-15T23:59:59.000Z",
          "usageLimit": 10,
          "usedCount": 3,
          "user": 6
        },
        {
          "_id": 7,
          "title": "10% Off First Order",
          "description": "10% off your first order.",
          "category": "Discount",
          "code": "WELCOME10",
          "active": true,
          "expirationDate": "2024-08-31T23:59:59.000Z",
          "usageLimit": 1,
          "usedCount": 1,
          "user": 7
        },
        {
          "_id": 8,
          "title": "Free Sample Pack",
          "description": "Receive a free sample pack with any order.",
          "category": "Offer",
          "code": "FREESAMPLE",
          "active": true,
          "expirationDate": "2024-07-31T23:59:59.000Z",
          "usageLimit": 5,
          "usedCount": 4,
          "user": 8
        }
      
]

export default coupons;
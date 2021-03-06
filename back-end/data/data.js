const bcrypt = require('bcryptjs');
const data = {
    users: [{
            name: "Tony",
            email: "tonyli@test.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: "Whitney",
            email: "whitney@test.com",
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        }
    ],
    products: [{
            name: 'Red Printed T-Shirt',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            imagePD1: '/images/product-1.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."
        },
        {

            name: 'Red Classic Runners',
            category: 'Shoes',
            image: '/images/product-2.jpg',
            imagePD1: '/images/product-2.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 190.00,
            inventory: 0,
            brand: 'Addidas',
            rating: 5,
            numReviews: 17,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Red Sweat Pants',
            category: 'Pants',
            image: '/images/product-3.jpg',
            imagePD1: '/images/product-3.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 60.00,
            inventory: 10,
            brand: 'Puma',
            rating: 3.5,
            numReviews: 8,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Blue Printed T-Shirt',
            category: 'Shirts',
            image: '/images/product-4.jpg',
            imagePD1: '/images/product-4.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Uni Qlo',
            rating: 5,
            numReviews: 34,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Red Printed T-Shirt small',
            category: 'Shirts',
            image: '/images/product-5.jpg',
            imagePD1: '/images/product-5.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Nike',
            rating: 3,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Red Printed T-Shirt medium',
            category: 'Shirts',
            image: '/images/product-6.jpg',
            imagePD1: '/images/product-6.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Red Printed T-Shirt large',
            category: 'Shirts',
            image: '/images/product-7.jpg',
            imagePD1: '/images/product-7.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Red Printed T-Shirt extra large',
            category: 'Shirts',
            image: '/images/product-8.jpg',
            imagePD1: '/images/product-8.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 120.00,
            inventory: 10,
            brand: 'Nike',
            rating: 1,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {
            name: 'Red Sports Watch',
            category: 'Shirts',
            image: '/images/product-9.jpg',
            imagePD1: '/images/product-9.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 320.00,
            inventory: 10,
            brand: 'Nike',
            rating: 3,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {

            name: 'Nike Running Shoes',
            category: 'Shirts',
            image: '/images/product-10.jpg',
            imagePD1: '/images/product-10.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 135.00,
            inventory: 10,
            brand: 'Nike',
            rating: 3.5,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {
            name: 'Red Store Casual Shoes',
            category: 'Shirts',
            image: '/images/product-11.jpg',
            imagePD1: '/images/product-11.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 60.00,
            inventory: 10,
            brand: 'Nike',
            rating: 5,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        },
        {
            name: 'Black Trackpants',
            category: 'Shirts',
            image: '/images/product-12.jpg',
            imagePD1: '/images/product-12.jpg',
            imagePD2: '/images/gallery-2.jpg',
            imagePD3: '/images/gallery-3.jpg',
            imagePD4: '/images/gallery-4.jpg',
            price: 68.00,
            inventory: 10,
            brand: 'Nike',
            rating: 1,
            numReviews: 10,
            description: 'High Quality Product',
            details: "Give your summer wardrobe a style upgrade with the HRX Men's Active T-shirt. Couple it with a pair of active shorts for your morining workout or denims for an evening out with the guys."

        }
    ],

    TestimonialsInfo: [{
            _id: 'F1',
            name: 'Sarah Parker',
            image: './images/user-1.png',
            message: "I had a really nice shopping experience with RedStore!",
            rating: 3.5,
        },
        {
            _id: 'F2',
            name: 'Tony Li',
            image: './images/user-2.png',
            message: "Great customer experience and the staff were very friendly!",
            rating: 4.5,
        },
        {
            _id: 'F3',
            name: 'Emma Genner',
            image: './images/user-3.png',
            message: "Will definately come back to shop! the proucts are high in quality!",
            rating: 4,
        },
        {
            _id: 'F4',
            name: 'Katey Ngyuen',
            image: './images/user-3.png',
            message: "Great service and friendly staff",
            rating: 4,
        }
    ]
}

module.exports = data;
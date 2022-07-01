var faker = require('faker');

var database = { products: [], menus: []};
for (var i = 1; i <= 30; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        rating: faker.datatype.number({min: 1, max: 5}),
        price: faker.commerce.price(200, 1000, 2, '$'),
        imageURL: "https://source.unsplash.com/1600x900/?food",
        quantity: faker.datatype.number({min: 100, max: 400})
    });
}

for (var i = 1; i <= 10; i++) {
    database.menus.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        rating: faker.datatype.number({min: 1, max: 5}),
        size: faker.datatype.number({min: 100, max: 400}),
        price: faker.commerce.price(200, 1000, 2, '$ '),
        imageURL: "https://source.unsplash.com/1600x900/?food",
    });
}

console.log(JSON.stringify(database));
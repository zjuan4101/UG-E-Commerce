require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {
  try {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Shirts', sortOrder: 10},
    {name: 'Hoodies', sortOrder: 20},
    {name: 'Mens', sortOrder: 30},
    {name: 'Womens', sortOrder: 40},
    {name: 'Kids', sortOrder: 50},
    {name: 'Babies', sortOrder: 60},
    {name: 'Hats', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: "Unknown Guardians-Men's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premium T-Shirt-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premium T-Shirt-Royal Blue", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=317,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[1]._id, categories[2]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[1]._id, categories[2]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=5,backgroundColor=e8e8e8.jpg', category: [categories[1]._id, categories[2]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 29.49},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 29.49},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=366,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id], price: 29.49},
    {name: "Unknown Guardians-Women's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A1PA4249PT17X56Y46D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[3]._id], price: 26.99},
    {name: "Unknown Guardians-Women's Premium T-Shirt-Pink", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A1PA4249PT17X56Y46D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=386,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[3]._id], price: 26.99},
    {name: "Unknown Guardians-Kid's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T815A1PA4253PT17X41Y21D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[4]._id], price: 22.49},
    {name: "Unknown Guardians-Kid's Premium T-Shirt-Kelly Green", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T815A1PA4253PT17X41Y21D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=92,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[4]._id], price: 22.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[5]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Light Pink", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=193,backgroundColor=e8e8e8.jpg', category: [categories[5]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Sky", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=239,backgroundColor=e8e8e8.jpg', category: [categories[5]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Light Mint", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=646,backgroundColor=e8e8e8.jpg', category: [categories[5]._id], price: 20.49},
    {name: "Unknown Guardians-Snapback Baseball Cap-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[6]._id], price: 20.99},
    {name: "Unknown Guardians-Snapback Baseball Cap-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=261,backgroundColor=e8e8e8.jpg', category: [categories[6]._id], price: 20.99},
    {name: "Unknown Guardians-Snapback Baseball Cap-Royal Blue", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=317,backgroundColor=e8e8e8.jpg', category: [categories[6]._id], price: 20.99},
  ]);

  console.log('Seeding completed successfully')

  process.exit(0);
} catch (error) {
  console.error('Error while seeding:', error);
    process.exit(1);
}

})();
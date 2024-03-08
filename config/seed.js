require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {
  try {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'All', sortOrder: 10},
    {name: 'Shirts', sortOrder: 20},
    {name: 'Hoodies', sortOrder: 30},
    {name: 'Mens', sortOrder: 40},
    {name: 'Womens', sortOrder: 50},
    {name: 'Kids', sortOrder: 60},
    {name: 'Babies', sortOrder: 70},
    {name: 'Accessories', sortOrder: 80},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: "Unknown Guardians-Men's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premium T-Shirt-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premium T-Shirt-Royal Blue", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T812A1PA4267PT17X90Y35D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=317,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 26.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[3]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[3]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premuim Hoodie-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T20A1PA4162PT17X81Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=5,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[3]._id], price: 43.99},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 29.49},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 29.49},
    {name: "Unknown Guardians-Men's Premium Long Sleeve T-Shirt-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T875A1PA4166PT17X64Y45D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=366,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[3]._id], price: 29.49},
    {name: "Unknown Guardians-Women's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A1PA4249PT17X56Y46D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[4]._id], price: 26.99},
    {name: "Unknown Guardians-Women's Premium T-Shirt-Pink", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A1PA4249PT17X56Y46D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=386,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[4]._id], price: 26.99},
    {name: "Unknown Guardians-Women's Premium T-Shirt-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T813A1PA4249PT17X56Y46D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=366,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[4]._id], price: 26.99},
    {name: "Unknown Guardians-Women's Premium Hoodie-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T444A1PA4131PT17X62Y9D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[4]._id], price: 43.99},
    {name: "Unknown Guardians-Women's Premium Hoodie-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T444A1PA4131PT17X62Y9D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[4]._id], price: 43.99},
    {name: "Unknown Guardians-Women's Premium Hoodie-Mauve", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T444A1PA4131PT17X62Y9D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=803,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[4]._id], price: 43.99},
    {name: "Unknow Guardians Bella + Cancas Unisex Lounge Wear Set-Heather Gray", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1592A231PA4189PT17X112Y48D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=231,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[3]._id, categories[4]._id], price: 67.99},
    {name: "Unknow Guardians Bella + Cancas Unisex Lounge Wear Set-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1592A231PA4189PT17X112Y48D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[3]._id, categories[4]._id], price: 67.99},
    {name: "Unknown Guardians-Kid's Premium T-Shirt-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T815A1PA4253PT17X41Y21D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[5]._id], price: 22.49},
    {name: "Unknown Guardians-Kid's Premium T-Shirt-Kelly Green", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T815A1PA4253PT17X41Y21D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=92,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[5]._id], price: 22.49},
    {name: "Unknown Guardians-Kid's Premium Hoodie-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T654A648PA4215PT17X62Y0D1047081335W12433H15988/views/1,width=650,height=650,appearanceId=648,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[5]._id], price: 41.49},
    {name: "Unknown Guardians-Kid's Premium Hoodie-Heather Denim", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T654A648PA4215PT17X62Y0D1047081335W12433H15988/views/1,width=650,height=650,appearanceId=647,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[2]._id, categories[5]._id], price: 41.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[6]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Light Pink", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=193,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[6]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Sky", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=239,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[6]._id], price: 20.49},
    {name: "Unknown Guardians-Organic Short Sleeve Baby Bodysuit-Light Mint", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T401A1PA642PT17X4Y5D1047081335W14991H19278/views/1,width=650,height=650,appearanceId=646,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[6]._id], price: 20.49},
    {name: "Unknown Guardians-Toddler Premium T-Shirt-Deep Navy", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T814A1PA4252PT17X30Y26D1047081335W10999H14144/views/1,width=650,height=650,appearanceId=823,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[6]._id], price: 22.49},
    {name: "Unknown Guardians-Toddler Premium T-Shirt-Dark Pink", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T814A1PA4252PT17X30Y26D1047081335W10999H14144/views/1,width=650,height=650,appearanceId=507,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[1]._id, categories[6]._id], price: 22.49},
    {name: "Unknown Guardians-Snapback Baseball Cap-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 20.99},
    {name: "Unknown Guardians-Snapback Baseball Cap-Red", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=261,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 20.99},
    {name: "Unknown Guardians-Snapback Baseball Cap-Royal Blue", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T803A2PA1648PT32X44Y0D1047081335W3955H5086/views/1,width=650,height=650,appearanceId=317,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 20.99},
    {name: "Unknown Guardians-Full Color Mug", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T949A2PA1998PT25X8Y3D1047081335W4497H5783/views/3,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 17.99},
    {name: "Unknown Guardians-Contrast Coffee Mug", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T268A70PA393PT10X8Y3D1047081335W4497H5783/views/3,width=650,height=650,appearanceId=70,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 17.49},
    {name: "Unknow Guardians-Dog Bandana-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T611A1PA1245PT17X52Y18D1047081335W16599H21345/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 16.99},
    {name: "Unknow Guardians-Dog Bandana-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T611A1PA1245PT17X52Y18D1047081335W16599H21345/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 16.99},
    {name: "Unknown Guardians-Throw Pillow Cover 17.5' x 17.5'", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T1049A361PA3068PT17X41Y43D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=361,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 17.99},
    {name: "Unknown Guardians-Bandana-White", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T610A1PA3685PT17X41Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 16.99},
    {name: "Unknown Guardians-Bandana-Black", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T610A1PA3685PT17X41Y16D1047081335W16657H21420/views/1,width=650,height=650,appearanceId=2,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 16.99},
    {name: "Unknown Guardians-Teddy Bear", image: 'https://image.spreadshirtmedia.com/image-server/v1/products/T909A1PA1895PT32X23Y4D1047081335W4899H6300/views/1,width=650,height=650,appearanceId=1,backgroundColor=e8e8e8.jpg', category: [categories[0]._id, categories[7]._id], price: 20.99},
  ]);

  console.log('Seeding completed successfully')

  process.exit(0);
} catch (error) {
  console.error('Error while seeding:', error);
    process.exit(1);
}

})();
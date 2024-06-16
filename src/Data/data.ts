export type CattleFarm = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const cattleFarms: CattleFarm[] = [
    {
        id: 1,
        name: 'Australlian Dairy - Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/Cheese.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/BeafMeat.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Ecma Farma Lhr',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Verzon Dairy - Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 6,
        name: 'Ecma Farma Lhr',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 7,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 8,
        name: 'Verzon Dairy - Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 9,
        name: 'Ecma Farma Lhr',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 10,
        name: 'Verzon Dairy - Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
]
export type TopCattelFarms = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const topCattelFarms: TopCattelFarms[] = [
    {
        id: 1,
        name: 'Verzon Dairy Lahore',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/Milk.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/BeafMeat.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Ecma Farma Lhr',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/Cheese.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/Honey.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/Honey.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
]
export type CattleFarmNearYou = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;

};
const cattleFarmsNearYou: CattleFarmNearYou[] = [
    {
        id: 1,
        name: 'Ecma Verzon Farm',
        rating: '4.5(2000)',
        deliveryTime: '45-60 min',
        deliveryPrice: '199PKR',
        minOrder: '500PKR - Min Order',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Dairy Pure Farm',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Vertialz Cattels',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Sunshine Dairy Farm',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Organic Rise Farm',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
]
// Define the type for quantity and price
export type QuantityPrice = {
    quantity: string; // e.g., "1K", "2K", "3K", "4K", "5K"
    eachprice: string; // e.g., "Rs.500", "Rs.1000", etc.
  };
  
  // Update the Product type to include the new structure
  export type Product = {
    id: number;
    name: string;
    image: any;
    location: string;
    catagoery: string;
    price: string;
    quantities: QuantityPrice[]; // New field for quantities and prices
  };
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Milk',
      image: require('../assets/Images/Milk.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: '800',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.500' },
        { quantity: '2KG', eachprice: 'Rs.900' },
        { quantity: '3KG', eachprice: 'Rs.1300' },
        { quantity: '4KG', eachprice: 'Rs.1700' },
        { quantity: '5KG', eachprice: 'Rs.2100' },
      ],
    },
    {
      id: 2,
      name: 'Cream',
      image: require('../assets/Images/Cream.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.400',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.400' },
        { quantity: '2KG', eachprice: 'Rs.750' },
        { quantity: '3KG', eachprice: 'Rs.1100' },
        { quantity: '4KG', eachprice: 'Rs.1450' },
        { quantity: '5KG', eachprice: 'Rs.1800' },
      ],
    },
    {
      id: 3,
      name: 'Butter',
      image: require('../assets/Images/Butter.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.500',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.500' },
        { quantity: '2KG', eachprice: 'Rs.950' },
        { quantity: '3KG', eachprice: 'Rs.1400' },
        { quantity: '4KG', eachprice: 'Rs.1850' },
        { quantity: '5KG', eachprice: 'Rs.2300' },
      ],
    },
    {
      id: 4,
      name: 'Meat',
      image: require('../assets/Images/Meat.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.600',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.600' },
        { quantity: '2KG', eachprice: 'Rs.1150' },
        { quantity: '3KG', eachprice: 'Rs.1700' },
        { quantity: '4KG', eachprice: 'Rs.2250' },
        { quantity: '5KG', eachprice: 'Rs.2800' },
      ],
    },
    {
      id: 5,
      name: 'Yougurt',
      image: require('../assets/Images/Yougurt.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.500',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.500' },
        { quantity: '2KG', eachprice: 'Rs.950' },
        { quantity: '3KG', eachprice: 'Rs.1400' },
        { quantity: '4KG', eachprice: 'Rs.1850' },
        { quantity: '5KG', eachprice: 'Rs.2300' },
      ],
    },
    {
      id: 6,
      name: 'Honey',
      image: require('../assets/Images/Honey.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.800',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.800' },
        { quantity: '2KG', eachprice: 'Rs.1550' },
        { quantity: '3KG', eachprice: 'Rs.2300' },
        { quantity: '4KG', eachprice: 'Rs.3050' },
        { quantity: '5KG', eachprice: 'Rs.3800' },
      ],
    },
    {
      id: 7,
      name: 'Beaf Meat',
      image: require('../assets/Images/BeafMeat.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.700',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.700' },
        { quantity: '2KG', eachprice: 'Rs.1350' },
        { quantity: '3KG', eachprice: 'Rs.2000' },
        { quantity: '4KG', eachprice: 'Rs.2650' },
        { quantity: '5KG', eachprice: 'Rs.3300' },
      ],
    },
    {
      id: 8,
      name: 'Chickens',
      image: require('../assets/Images/Chicken.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.400',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.400' },
        { quantity: '2KG', eachprice: 'Rs.750' },
        { quantity: '3KG', eachprice: 'Rs.1100' },
        { quantity: '4KG', eachprice: 'Rs.1450' },
        { quantity: '5KG', eachprice: 'Rs.1800' },
      ],
    },
    {
      id: 9,
      name: 'Cheese',
      image: require('../assets/Images/Cheese.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.500',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.500' },
        { quantity: '2KG', eachprice: 'Rs.950' },
        { quantity: '3KG', eachprice: 'Rs.1400' },
        { quantity: '4KG', eachprice: 'Rs.1850' },
        { quantity: '5KG', eachprice: 'Rs.2300' },
      ],
    },
    {
      id: 10,
      name: 'Oil & Ghee',
      image: require('../assets/Images/Oil.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.700',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.700' },
        { quantity: '2KG', eachprice: 'Rs.1350' },
        { quantity: '3KG', eachprice: 'Rs.2000' },
        { quantity: '4KG', eachprice: 'Rs.2650' },
        { quantity: '5KG', eachprice: 'Rs.3300' },
      ],
    },
    {
      id: 11,
      name: 'Eggs',
      image: require('../assets/Images/Eggs.jpg'),
      location: 'Lahore',
      catagoery: 'Cattel Farm Organic Production',
      price: 'Rs.300',
      quantities: [
        { quantity: '1KG', eachprice: 'Rs.300' },
        { quantity: '2KG', eachprice: 'Rs.580' },
        { quantity: '3KG', eachprice: 'Rs.860' },
        { quantity: '4KG', eachprice: 'Rs.1140' },
        { quantity: '5KG', eachprice: 'Rs.1420' },
      ],
    },
  ];
    
export type Category = {
    id: number;
    name: string;
    image: any;
};
const category: Category[] = [
    {
        id: 1,
        name: 'Coffee',
        image: require('../assets/Images/Yougurt.jpg'),
    },
    {
        id: 2,
        name: 'Bavrage',
        image: require('../assets/Images/Yougurt.jpg'),
    },
    {
        id: 3,
        name: 'Drinks',
        image: require('../assets/Images/Yougurt.jpg'),
    },
    {
        id: 4,
        name: 'Fresh',
        image: require('../assets/Images/Yougurt.jpg'),
    },
    {
        id: 5,
        name: 'Cream',
        image: require('../assets/Images/Yougurt.jpg'),
    },
]
export type Bakeries = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const bakeries: Bakeries[] = [
    {
        id: 1,
        name: 'Gorment',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/Gorment.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Bundu Khan',
        rating: '3.5(500)',
        deliveryTime: '40 - 55 min',
        deliveryPrice: '150 PKR',
        minOrder: '350 PKR min',
        image: require('../assets/Images/BundoKhan.jpg'),
        reviews: '140',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Kitchekn Cuisine',
        rating: '3.5(250)',
        deliveryTime: '45 - 55 min',
        deliveryPrice: '199 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/KCuisine.png'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Layers',
        rating: '5(100)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '200 PKR',
        minOrder: '400 PKR min',
        image: require('../assets/Images/Layers.png'),
        reviews: '1650',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Kitchekn Cuisine',
        rating: '3.5(250)',
        deliveryTime: '45 - 55 min',
        deliveryPrice: '199 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/KCuisine.png'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 6,
        name: 'Jala Sons',
        rating: '5(1000)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '120 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/JalalSons.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 7,
        name: 'Laraib Bakers',
        rating: '3.5(100)',
        deliveryTime: '40 - 50 min',
        deliveryPrice: '150 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/Laraib.jpg'),
        reviews: '900',
        location: 'Lahore',
    },
    {
        id: 8,
        name: 'Jalal Sons',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
]
export type BakeriesNearYou = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const bakeriesNearYou: BakeriesNearYou[] = [
    {
        id: 1,
        name: 'Jalal Sons',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Layers',
        rating: '3.5(500)',
        deliveryTime: '40 - 55 min',
        deliveryPrice: '150 PKR',
        minOrder: '350 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '140',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Cakes and Bakes',
        rating: '5(100)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '200 PKR',
        minOrder: '400 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1650',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Bundo Khan',
        rating: '3.5(250)',
        deliveryTime: '45 - 55 min',
        deliveryPrice: '199 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Gorment',
        rating: '5(1000)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '120 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
]
export type TopBakeries = {
    id: number;
    name: string;
    rating: string;
    deliveryTime: string;
    deliveryPrice: string;
    minOrder: string;
    image: any;
    location: string;
    reviews: string;
};
const topbakeries: TopBakeries[] = [
    {
        id: 1,
        name: 'Gorment',
        rating: '3.5(250)',
        deliveryTime: '45 - 55 min',
        deliveryPrice: '199 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/Gorment.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
    {
        id: 2,
        name: 'Cakes and Bakes',
        rating: '5(100)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '200 PKR',
        minOrder: '400 PKR min',
        image: require('../assets/Images/CakesBakes.jpg'),
        reviews: '1650',
        location: 'Lahore',
    },
    {
        id: 3,
        name: 'Layers',
        rating: '3.5(500)',
        deliveryTime: '40 - 55 min',
        deliveryPrice: '150 PKR',
        minOrder: '350 PKR min',
        image: require('../assets/Images/Layers.png'),
        reviews: '140',
        location: 'Lahore',
    },
    {
        id: 4,
        name: 'Jalal Sons',
        rating: '4.5(200)',
        deliveryTime: '45 - 60 min',
        deliveryPrice: '199 PKR',
        minOrder: '500 PKR min',
        image: require('../assets/Images/JalalSons.jpg'),
        reviews: '2000',
        location: 'Lahore',
    },
    {
        id: 5,
        name: 'Kitchen Cuisine',
        rating: '5(1000)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '120 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/KCuisine.png'),
        reviews: '1000',
        location: 'Lahore',
    },
]
export type BakriesProducts = {
    id: number;
    name: string;
    image: any;
    price: any;
    location: any;
    catagoery: any;
};
const bakriesProducts: BakriesProducts[] = [
    {
        id: 1,
        name: 'Cakes',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
    {
        id: 2,
        name: 'Coffe',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
    {
        id: 3,
        name: 'Surp & Shakes',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
    {
        id: 4,
        name: 'Sweets',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
    {
        id: 5,
        name: 'Brownies',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
]
export { cattleFarms, topCattelFarms, cattleFarmsNearYou, bakeries, topbakeries, bakeriesNearYou, bakriesProducts, products, category };
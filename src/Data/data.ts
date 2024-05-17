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
const topCattelFarms: TopCattelFarms[] =[
    {
        id: 1,
        name: 'Verzon Dairy - Lahore',
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
export type Product = {
    id: number;
    name: string;
    image: any;
    price: any;
    location: any;
    catagoery: any;
};
const products: Product[] = [
    {
        id: 1,
        name: 'Milk',
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
        image: require('../assets/Images/Milk.jpg'),
    },
    {
        id: 2,
        name: 'Cream',
        image: require('../assets/Images/Cream.jpg'),
        price: 'From Rs.400',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 3,
        name: 'Butter',
        image: require('../assets/Images/Butter.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 4,
        name: 'Meat',
        image: require('../assets/Images/Meat.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 5,
        name: 'Yougurt',
        image: require('../assets/Images/Yougurt.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 6,
        name: 'Honey',
        image: require('../assets/Images/Honey.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 7,
        name: 'Beaf Meat',
        image: require('../assets/Images/BeafMeat.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 8,
        name: 'Chickens',
        image: require('../assets/Images/Chicken.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 9,
        name: 'Cheesse',
        image: require('../assets/Images/Cheese.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 10,
        name: 'Oil & Ghee',
        image: require('../assets/Images/Oil.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
    {
        id: 11,
        name: 'Eggs',
        image: require('../assets/Images/Eggs.jpg'),
        price: 'From Rs.500',
        location: 'Lahore',
        catagoery: 'Cattel Farm Organic Production',
    },
]
export type Category = {
    id: number;
    name: string;
    image: any;
};
const category: Category[] = [
    {
        id: 1,
        name: 'Dairy Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 2,
        name: 'Farm Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 3,
        name: 'Farm Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 4,
        name: 'Fresh Milk',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 5,
        name: 'Dairy Cream',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 6,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
    },
    {
        id: 7,
        name: 'Butter',
        image: require('../assets/Images/ImageOne.jpg'),
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
        name: 'Cake & Bake',
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
    {
        id: 6,
        name: 'Laraib Bakers',
        rating: '3.5(100)',
        deliveryTime: '40 - 50 min',
        deliveryPrice: '150 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '900',
        location: 'Lahore',
    },
    {
        id: 7,
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
    {
        id: 6,
        name: 'Laraib Bakers',
        rating: '3.5(100)',
        deliveryTime: '40 - 50 min',
        deliveryPrice: '150 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '900',
        location: 'Lahore',
    },
    {
        id: 7,
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
        name: 'Gorment',
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
        name: 'Al Hamara',
        rating: '5(1000)',
        deliveryTime: '20 - 30 min',
        deliveryPrice: '120 PKR',
        minOrder: '300 PKR min',
        image: require('../assets/Images/ImageOne.jpg'),
        reviews: '1000',
        location: 'Lahore',
    },
]
// export type dairyproducts = {
//     id: number;
//     name: string;
//     deliveryTime: string;
//     deliveryPrice: string;
//     image: any;
//     location: string;
//     catagery: string;

// };
export {cattleFarms, topCattelFarms, cattleFarmsNearYou, bakeries, topbakeries, bakeriesNearYou, products, category};
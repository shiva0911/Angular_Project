import {Food} from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = 
[
  {
    id:'1',
    name: 'Americano',
    cookTime: '10-20',
    price: 10,
    favorite: false,
    origins: ['italy','America'],
    stars: 4.5,
    imageUrl: 'assets/americano.jpg',
    tags: ['Coffee'],
  },
  
  {
    id:'2',
    name: 'Irish',
    price: 20,
    cookTime: '20-30',
    favorite: true,
    origins: [ 'Italy', 'china'],
    stars: 4.7,
    imageUrl: 'assets/Irish.jpg',
    tags: ['Coffee'],
  },
  {
    id:'3',
    name: 'Moacha',
    price: 5,
    cookTime: '10-15',
    favorite: false,
    origins: ['germany', 'us'],
    stars: 3.5,
    imageUrl: 'assets/mocha.jpg',
    tags: ['Coffee'],
  },
  {
    id:'4',
    name: 'Cortado',
    price: 2,
    cookTime: '15-20',
    favorite: true,
    origins: ['belgium', 'france'],
    stars: 3.3,
    imageUrl: 'assets/cortado.jpg',
    tags: ['Coffee'],
  },
  {
    id:'5',
    name: 'White Tea',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/white-tea.png',
    tags: ['Tea'],
  },
  {
    id:'6',
    name: 'Matcha Tea',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/matcha-tea.png',
    tags: ['Tea'],
  },
  {
    id:'7',
    name: 'Green Tea',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/green-tea.png',
    tags: ['Tea'],
  },
  {
    id:'8',
    name: 'Black Tea',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/black-tea.png',
    tags: ['Tea'],
  },
  
  
  {
    id:'9',
    name: 'Mango Shakes',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/mango-shakes.jpg',
    tags: ['Shakes'],
  },
  {
    id:'10',
    name: 'Chocholate Shakes',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/chocholate-shakes.jpg',
    tags: ['Shakes'],
  },
  {
    id:'11',
    name: 'Banana Shakes',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/banana-milkshake.jpg',
    tags: ['Shakes'],
  },
  {
    id:'12',
    name: 'Vanilla Shakes',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/vanilla-shakes.jpg',
    tags: ['Shakes'],
  },
  
  {
    id:'13',
    name: 'Nutty Caramel Desert',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/nutty-caramel -desert.jpg',
    tags: ['Desert'],
  },
  {
    id:'14',
    name: 'Mexican-Fried Desert',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/mexican-fried-desert.jpg',
    tags: ['Desert'],
  },
  {
    id:'15',
    name: 'Frozen Banana Desert',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/frozen banana-desert.jpg',
    tags: ['Desert'],
  },
  {
    id:'16',
    name: 'Chocholate Desert',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/chocholate-desert.jpg',
    tags: ['Desert'],
  },
  {
    id:'17',
    name: 'WaterMelon',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/watermelon-drinks.jpg',
    tags: ['SoftDrinks'],
  },
  {
    id:'18',
    name: 'Pomegranate',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/pomegranate-vodka-drinks.jpg',
    tags: ['SoftDrinks'],
  },
  {
    id:'19',
    name: 'Orange',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/orange-and-basil-drinks.jpg',
    tags: ['SoftDrinks'],
  },
  {
    id:'20',
    name: 'Rhubard',
    price: 11,
    cookTime: '40-50',
    favorite: false,
    origins: ['india'],
    stars: 3.0,
    imageUrl: 'assets/rhubarb-drinks.jpg',
    tags: ['SoftDrinks'],
  },
  
  
]

export const sample_tags:Tag[] = 
[
        {name:"All",count:24},
        {name:"Coffee",count:4},
        {name:"Tea",count:4},
        {name:"Shakes",count:4},
        {name:"Beer",count:4},
        {name:"SoftDrinks",count:4},
        {name:"Desert",count:4},
]

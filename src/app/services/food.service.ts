import { Injectable } from '@angular/core';
import { Foods } from '../shared/models/food';
import { Tag } from '../shared/models/Tag';


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodbytag(tag: string): Foods[] {
    return tag == 'All' ?
      this.getAll() : this.getAll().filter(food => food.tags?.
        includes(tag));


  }
  getAlltag(): Tag[] {
    return [
      { Name: 'All', count: 12 },
      { Name: 'FastFood', count: 6 },
      { Name: 'pizza', count: 1 },
      { Name: 'Lunch', count: 4 },
      { Name: 'slowfood', count: 2 },
      { Name: 'Burger', count: 2 },
      { Name: 'Fry', count: 2 },
      { Name: 'dinner', count: 2 },


    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        Name: 'Burger',
        cookTime: '10-20',
        price: 120,
        favourite: false,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-1.jpg',
        tags: ['FastFood', 'Burger', 'Lunch'],
      },
      {
        id: 2,
        Name: 'HamBurger',
        cookTime: '10-25',
        price: 140,
        favourite: true,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-2.jpg',
        tags: ['FastFood', 'Burger'],
      },


      {
        id: 3,
        Name: 'Bhajipav',
        cookTime: '10-30',
        price: 130,
        favourite: true,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-3.jpg',
        tags: ['Bhajipav', 'dinner'],
      },


      {
        id: 4,
        Name: 'Dosa',
        cookTime: '10-15',
        price: 60,
        favourite: false,
        origins: ['South-indian'],
        star: 4.5,
        imageUrl: '/assets/food-13.jpg',
        tags: ['Dosa', 'slowfood'],
      },


      {
        id: 5,
        Name: 'French fries',
        cookTime: '10-15',
        price: 75,
        favourite: true,
        origins: ['indian,Italian'],
        star: 4.5,
        imageUrl: '/assets/food-5.jpeg',
        tags: ['Fry', 'fries', 'Breakfast'],
      },


      {
        id: 6,
        Name: 'Manchurian Dry',
        cookTime: '10-25',
        price: 75,
        favourite: true,
        origins: ['Chinese indian'],
        star: 4.5,
        imageUrl: '/assets/food-6.jpg',
        tags: ['Fry', 'Manchurian', 'Lunch'],
      },


      {
        id: 7,
        Name: 'Paneer Paratha',
        cookTime: '20-30',
        price: 100,
        favourite: true,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-7.jpg',
        tags: ['FastFood', 'Paratha', 'Lunch'],
      },


      {
        id: 8,
        Name: 'Peppy Paneer Pizza',
        cookTime: '10-30',
        price: 250,
        favourite: true,
        origins: ['indian,Italian'],
        star: 4.5,
        imageUrl: '/assets/food-8.jpg',
        tags: ['FastFood', 'pizza',],
      },
      {
        id: 9,
        Name: 'Manchurian Gravy',
        cookTime: '10-25',
        price: 120,
        favourite: false,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-9.jpg',
        tags: ['FastFood', 'Manchurian', 'Lunch'],
      },
      {
        id: 10,
        Name: 'Manchurian Noodles',
        cookTime: '10-20',
        price: 80,
        favourite: true,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-10.webp',
        tags: ['FastFood', 'Noodles'],
      },


      {
        id: 11,
        Name: 'Cheese Blast Frankie',
        cookTime: '10-15',
        price: 70,
        favourite: true,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-11.jpg',
        tags: ['dinner', 'Frankie roll'],
      },


      {
        id: 12,
        Name: 'Samosa',
        cookTime: '15-20',
        price: 20,
        favourite: false,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/food-12.jpg',
        tags: ['samosa', 'slowfood'],
      },

    ];
  }














}

import { BaseEntity } from './BaseEntity';
import { MenuCategory } from './MenuCategory';
import { Restaurant } from './Restaurant';

export class Menu extends BaseEntity {
  restaurant?: Restaurant;

  Categories: MenuCategory[] = [];
}

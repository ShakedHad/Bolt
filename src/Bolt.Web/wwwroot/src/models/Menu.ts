import { Type } from 'class-transformer';
import { type } from 'os';
import { BaseEntity } from './BaseEntity';
import { MenuCategory } from './MenuCategory';
import { Restaurant } from './Restaurant';

export class Menu extends BaseEntity {
  restaurant?: Restaurant;

  @Type(() => MenuCategory)
  categories: MenuCategory[] = [];
}

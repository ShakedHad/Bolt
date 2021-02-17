import { BaseEntity } from './BaseEntity';
import { MenuCategory } from './MenuCategory';

export class MenuItem extends BaseEntity {
  name: string = '';

  description: string = '';

  imageUrl: string = '';

  menuCategory?: MenuCategory;
}

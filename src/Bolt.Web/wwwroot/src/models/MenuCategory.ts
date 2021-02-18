import { Type } from 'class-transformer';
import { BaseEntity } from './BaseEntity';
import { MenuItem } from './MenuItem';

export class MenuCategory extends BaseEntity {
  name: string = '';

  description: string = '';

  @Type(() => MenuItem)
  items: MenuItem[] = [];
}

import { Transform } from 'class-transformer';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { DayOfWeek } from './DayOfWeek';
import { RestaurantCategory } from './RestaurantCategory';
import { User } from './User';
import { BaseEntity } from './BaseEntity';
import 'reflect-metadata';

export class Restaurant extends BaseEntity {
  @Transform(
    ({ value } : {value: {DayOfWeek: {item1: string, item2: string}}}) => (
      _.mapValues(value, (hours) => {
        return [DateTime.fromISO(hours.item1), DateTime.fromISO(hours.item2)];
      })
    ),
    { toClassOnly: true },
  )
  openingHours: {[K in DayOfWeek]: [DateTime, DateTime]} = {
    [DayOfWeek.Sunday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Monday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Tuesday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Wednesday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Thursday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Friday]: [DateTime.local(), DateTime.local()],
    [DayOfWeek.Saturday]: [DateTime.local(), DateTime.local()],
  };

  name: string = '';

  description: string = '';

  address: string = '';

  deliveryRadius: number = 0;

  phoneNumber: string = '';

  website: string = '';

  isOpenedForOrders: boolean = true;

  imageUrl: string = '';

  owner: User = new User();

  category: RestaurantCategory = RestaurantCategory.Burger;

  constructor() {
    super();
  }
}

import { Type, Transform } from 'class-transformer';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { DayOfWeek } from './DayOfWeek';
import { RestaurantCategory } from './RestaurantCategory';
import { User } from './User';
import 'reflect-metadata';

export class Restaurant {
  @Transform(
    ({ value } : {value: {DayOfWeek: [string, string]}}) => (
      _.mapValues(value, (hours) => [DateTime.fromISO(hours[0]), DateTime.fromISO(hours[1])])
    ),
    { toClassOnly: true },
  )
  openingHours: {DayOfWeek: [Open: DateTime, close: DateTime]};

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public address: string,
    public deliveryRadius: number,
    public phoneNumber: string,
    public website: string,
    public isOpenedForOrders: boolean,
    public imageUrl: string,
    public owner: User,
    public category: RestaurantCategory,
    openingHours: {DayOfWeek: [Open: DateTime, close: DateTime]},
  ) {
    this.openingHours = openingHours;
  }
}

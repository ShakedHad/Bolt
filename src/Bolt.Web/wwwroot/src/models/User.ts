import { BaseEntity } from './BaseEntity';

export class User extends BaseEntity {
  firstName: string = '';

  lastName: string = '';

  googleId: string = '';

  email: string = '';

  imageUrl: string = '';
}

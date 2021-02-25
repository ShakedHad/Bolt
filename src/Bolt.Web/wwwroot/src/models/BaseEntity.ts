import { Transform } from 'class-transformer';
import { Guid } from 'guid-typescript';

export class BaseEntity {
  @Transform(
    ({ value } : {value: string}) => (
      Guid.parse(value)
    ),
    { toClassOnly: true },
  )
  id: Guid = Guid.createEmpty();
}

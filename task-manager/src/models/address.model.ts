import {Entity, model, property} from '@loopback/repository';

@model()
export class Address extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  city?: string;

  @property({
    type: 'string',
  })
  pincode?: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
  })
  state?: string;

  @property({
    type: 'number',
  })
  studentId?: number;

  constructor(data?: Partial<Address>) {
    super(data);
  }
}

export interface AddressRelations {
  // describe navigational properties here
}

export type AddressWithRelations = Address & AddressRelations;

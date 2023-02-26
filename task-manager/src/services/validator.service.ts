import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { HttpErrors } from '@loopback/rest';
import * as isEmail from 'isemail';
import { UserCredentials, UserRepository } from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class ValidatorService {

  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Add service methods here
   */
  static validateCredentials(userCredentials: UserCredentials) {

    if(!isEmail.validate(userCredentials.email)){
      throw new HttpErrors.UnprocessableEntity("Email is not valid");
    }

    if(userCredentials.password.length < 4){
      throw new HttpErrors.UnprocessableEntity("Password length should be greater than or equal to 4 characters");
    }
  }
}

import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class ErrorService {


  default(response: Response, status: number) { 
    return response.status(status).send();
    // return  HttpStatus.
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

}

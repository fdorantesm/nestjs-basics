import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid';

@Injectable()
export class UuidService {
  public getUuid(): string {
    return uuid.v4();
  }
}

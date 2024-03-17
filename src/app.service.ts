import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Bitirme Projesi - Futbol Analizi - Api';
  }
}

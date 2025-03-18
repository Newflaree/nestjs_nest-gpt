// Nest
import { Injectable } from '@nestjs/common';
// Use Cases
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  async orthographyCheck() {
    return await orthographyCheckUseCase();
  }
}

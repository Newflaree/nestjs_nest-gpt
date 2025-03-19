// Nest
import { Injectable } from '@nestjs/common';
// Dto
import { OrthographyDto } from './dtos';
// Use Cases
import { orthographyCheckUseCase } from './use-cases';

@Injectable()
export class GptService {
  async orthographyCheck( orthographyDto: OrthographyDto ) {
    return await orthographyCheckUseCase({
      prompt: orthographyDto.prompt
    });
  }
}

import { HttpException, HttpStatus } from '@nestjs/common';

export class ContatoExistentException extends HttpException {
  constructor() {
    super('Contato já cadastrado', HttpStatus.CONFLICT);
  }
}

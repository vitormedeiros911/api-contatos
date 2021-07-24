import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContatosModule } from './contatos/contatos.module';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [ContatosModule, TypeOrmModule.forRoot(TypeOrmConfig)]
})
export class AppModule {}

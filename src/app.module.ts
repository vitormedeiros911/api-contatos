import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContatosModule } from './contatos/contatos.module';
import { TypeOrmConfig } from './config/typeorm.config';
import { TelefonesModule } from './telefones/telefones.module';

@Module({
  imports: [ContatosModule, TypeOrmModule.forRoot(TypeOrmConfig), TelefonesModule]
})
export class AppModule {}

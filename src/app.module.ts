import { Module } from '@nestjs/common';
import { ContatosModule } from './contatos/contatos.module';

@Module({
  imports: [ContatosModule]
})
export class AppModule {}

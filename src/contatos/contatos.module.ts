import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContatosController } from './contatos.controller';
import { ContatosService } from './contatos.service';
import { ContatoRepository } from './contatos.repository';
import { TelefonesModule } from 'src/telefones/telefones.module';

@Module({
	imports: [
		TypeOrmModule.forFeature([ContatoRepository]),
		forwardRef(() => TelefonesModule),
	],
	controllers: [ContatosController],
	providers: [ContatosService]
})
export class ContatosModule {}

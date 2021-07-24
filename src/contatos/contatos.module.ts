import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContatosController } from './contatos.controller';
import { ContatosService } from './contatos.service';
import { ContatoRepository } from './repository/contatos.repository';
import { TelefoneRepository } from './repository/telefone.repository';

@Module({
	imports: [TypeOrmModule.forFeature([ContatoRepository, TelefoneRepository])],
	controllers: [ContatosController],
	providers: [ContatosService],
})
export class ContatosModule {}

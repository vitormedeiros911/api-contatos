import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContatosService } from './contatos.service';
import { Contato } from './model/contato.entity';
import { ContatoRepository } from './repository/contatos.repository';
import { CreateContatoDTO } from './DTO/create-contato.dto';

@Controller('contatos')
export class ContatosController {
	constructor(
		@InjectRepository(ContatoRepository)
		private contatoRepository: ContatoRepository,
		private contatosService: ContatosService,
	) {}

	@Get()
	getContatos(): Promise<Contato[]> {
		return this.contatoRepository.find();
	}

	@Post('novo')
	@UsePipes(ValidationPipe)
	createContato(@Body() createContatoDTO: CreateContatoDTO): Promise<Contato> {
		return this.contatosService.createContato(createContatoDTO);
	}
}

import {
	Controller,
	Get,
	Post,
	Body,
	UsePipes,
	ValidationPipe,
	Param,
	ParseIntPipe,
	Patch,
	Delete,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContatosService } from './contatos.service';
import { Contato } from './contato.entity';
import { ContatoRepository } from './contatos.repository';
import { CreateContatoDTO } from './dto/create-contato.dto';
import { UpdateContatoDTO } from './dto/update-contato.dto';

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
	createContato(@Body() createContatoDTO: CreateContatoDTO): Promise<Contato> {
		return this.contatosService.createContato(createContatoDTO);
	}

	@Get(':id')
	getOneContato(@Param('id', ParseIntPipe) id: number): Promise<Contato> {
		return this.contatosService.getOneContato(id);
	}

	@Patch('editar/:id')
	updateContato(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateContatoDTO: UpdateContatoDTO,
	): Promise<Contato> {
		return this.contatosService.uptadeContato(id, updateContatoDTO);
	}

	@Delete('excluir/:id')
	deleteContato(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.contatosService.deleteContato(id);
	}
}

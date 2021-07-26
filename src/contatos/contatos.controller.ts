import {
	Controller,
	Get,
	Post,
	Body,
	Param,
	ParseIntPipe,
	Patch,
	Delete,
	Query,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Contato } from './contato.entity';
import { Telefone } from 'src/telefones/telefone.entity';

import { ContatoRepository } from './contatos.repository';

import { CreateContatoDTO } from './dto/create-contato.dto';
import { UpdateContatoDTO } from './dto/update-contato.dto';
import { TelefoneDTO } from '../telefones/dto/telefone.dto';
import { FilterDTO } from './dto/filter.dto';

import { ContatosService } from './contatos.service';
import { TelefonesService } from 'src/telefones/telefones.service';

@Controller('contatos')
export class ContatosController {
	constructor(
		@InjectRepository(ContatoRepository)
		private contatoRepository: ContatoRepository,
		private contatosService: ContatosService,
		private telefoneService: TelefonesService,
	) {}

	@Get()
	async getContatos(@Query() filter: FilterDTO): Promise<Contato[]> {
		if (filter.email) {
			return await this.contatoRepository.find({
				where: { email: filter.email },
			});
		}
		if (filter.nome) {
			return await this.contatoRepository.find({
				where: { nome: filter.nome },
			});
		}

		return await this.contatoRepository.find();
	}

	@Post('novo')
	async createContato(
		@Body() createContatoDTO: CreateContatoDTO,
	): Promise<Contato> {
		return await this.contatosService.createContato(createContatoDTO);
	}

	@Post(':id/telefone/novo')
	async createTelefone(
		@Param('id', ParseIntPipe) id: number,
		@Body() createTelefoneDTO: TelefoneDTO,
	): Promise<Telefone> {
		await this.contatosService.getOneContato(id);
		createTelefoneDTO.contatoId = id;
		return await this.telefoneService.createTelefone(createTelefoneDTO);
	}

	@Get(':id')
	async getOneContato(@Param('id', ParseIntPipe) id: number): Promise<Contato> {
		return await this.contatosService.getOneContato(id);
	}

	@Patch('editar/:id')
	async updateContato(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateContatoDTO: UpdateContatoDTO,
	): Promise<Contato> {
		return await this.contatosService.uptadeContato(id, updateContatoDTO);
	}

	@Patch('telefone/editar/:id')
	async updateTelefone(
		@Param('id', ParseIntPipe) id: number,
		@Body() updateTelefoneDTO: TelefoneDTO,
	): Promise<Telefone> {
		return await this.telefoneService.updateTelefone(id, updateTelefoneDTO);
	}

	@Delete('excluir/:id')
	async deleteContato(@Param('id', ParseIntPipe) id: number): Promise<void> {
		await this.contatosService.deleteContato(id);
	}

	@Delete('telefone/excluir/:id')
	async deleteTelefone(@Param('id', ParseIntPipe) id: number): Promise<void> {
		await this.telefoneService.deleteTelefone(id);
	}
}

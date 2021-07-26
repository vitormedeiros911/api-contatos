import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContatoRepository } from './contatos.repository';
import { Contato } from './contato.entity';
import { CreateContatoDTO } from './dto/create-contato.dto';
import { UpdateContatoDTO } from './dto/update-contato.dto';
import { TelefonesService } from 'src/telefones/telefones.service';
import { ContatoExistentException } from './exception/contatoExistent.exception';
@Injectable()
export class ContatosService {
	constructor(
		@InjectRepository(ContatoRepository)
		private contatoRepository: ContatoRepository,
		private telefoneService: TelefonesService,
	) {}

	async createContato(createContatoDTO: CreateContatoDTO): Promise<Contato> {
		const { telefones, email } = createContatoDTO;

		const contatoExistente: Contato = await this.contatoRepository.findOne({
			where: { email },
		});

		if (contatoExistente) {
			throw new ContatoExistentException();
		}

		const contato = this.contatoRepository.create(createContatoDTO);
		const savedContato = await this.contatoRepository.save(contato);

		for (let i = 0; i < telefones.length; i++) {
			telefones[i].contatoId = savedContato.id;
			await this.telefoneService.createTelefone(telefones[i]);
		}

		return savedContato;
	}

	async getOneContato(id: number): Promise<Contato> {
		const contato = await this.contatoRepository.findOne({ where: { id } });

		if (!contato) {
			throw new NotFoundException('Contato não encontrado');
		}

		return contato;
	}

	async uptadeContato(
		id: number,
		updateContatoDTO: UpdateContatoDTO,
	): Promise<Contato> {
		await this.getOneContato(id);

		await this.contatoRepository.update({ id }, updateContatoDTO);
		return await this.getOneContato(id);
	}

	async deleteContato(id: number): Promise<void> {
		await this.getOneContato(id);
		await this.contatoRepository.delete({ id });
	}
}

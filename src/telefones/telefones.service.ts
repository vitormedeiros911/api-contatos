import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TelefoneDTO } from './dto/telefone.dto';
import { TelefoneRepository } from './telefone.repository';
import { Telefone } from './telefone.entity';

@Injectable()
export class TelefonesService {
	constructor(
		@InjectRepository(TelefoneRepository)
		private telefoneRepository: TelefoneRepository,
	) {}

	async createTelefone(createTelefoneDTO: TelefoneDTO): Promise<Telefone> {
		const telefone = this.telefoneRepository.create(createTelefoneDTO);
		return await this.telefoneRepository.save(telefone);
	}

	async getTelefoneById(id: number): Promise<Telefone> {
		const telefone = await this.telefoneRepository.findOne({
			where: { id },
		});

		if (!telefone) {
			throw new NotFoundException('Telefone não encontrado');
		}

		return telefone;
	}

	async updateTelefone(
		id: number,
		updateTelefoneDTO: TelefoneDTO,
	): Promise<Telefone> {
		await this.getTelefoneById(id);

		await this.telefoneRepository.update({ id }, updateTelefoneDTO);
		return await this.getTelefoneById(id);
	}

	async deleteTelefone(id: number): Promise<void> {
		await this.getTelefoneById(id);
		await this.telefoneRepository.delete({ id });
	}
}

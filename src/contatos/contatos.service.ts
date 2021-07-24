import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ContatoRepository } from './repository/contatos.repository';
import { Contato } from './model/contato.entity';
import { CreateContatoDTO } from './DTO/create-contato.dto';
import { TelefoneRepository } from './repository/telefone.repository';

@Injectable()
export class ContatosService {
	constructor(
		@InjectRepository(ContatoRepository)
		private contatoRepository: ContatoRepository,
		@InjectRepository(TelefoneRepository)
		private telefoneRepository: TelefoneRepository,
	) {}

	async createContato(createContatoDTO: CreateContatoDTO): Promise<Contato> {
		const { telefones } = createContatoDTO;

		// const contatoExistente: Contato = await this.contatoRepository.findOne({
		// 	where: { nome },
		// });

		const contato = this.contatoRepository.create(createContatoDTO);
		const savedContato = await this.contatoRepository.save(contato);

		for (let i = 0; i < telefones.length; i++) {
			telefones[i].contatoId = savedContato.id;
			const telefone = this.telefoneRepository.create(telefones[i]);
			await this.telefoneRepository.save(telefone);
		}

		return savedContato
	}
}

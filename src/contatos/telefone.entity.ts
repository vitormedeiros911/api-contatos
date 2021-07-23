import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { Contato } from './contato.entity';

@Entity()
export class Telefone extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	numero: string;

	@ManyToOne(
		() => Contato,
		contato => contato.telefones,
		{ eager: false },
	)
	contato: Contato;

	@Column()
	contatoId: number;
}

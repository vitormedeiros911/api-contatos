import {
	BaseEntity,
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';

import { Contato } from '../contatos/contato.entity';

@Entity()
export class Telefone extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	numero: string;

	@ManyToOne(
		() => Contato,
		contato => contato.telefones,
		{ onDelete: 'CASCADE', eager: false },
	)
	contato: Contato;

	@Column()
	contatoId: number;
}

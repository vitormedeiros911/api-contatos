import {
	BaseEntity,
	Column,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Telefone } from './telefone.entity';

@Entity()
export class Contato extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	nome: string;

	@Column()
	sobrenome: string;

	@Column()
	email: string;

	@OneToMany(
		() => Telefone,
		telefone => telefone.contato,
		{ eager: true },
	)
	telefones: Telefone[];
}

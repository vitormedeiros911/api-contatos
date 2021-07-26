import { Type } from 'class-transformer';
import {
	IsNotEmpty,
	IsString,
	IsArray,
	ArrayMinSize,
	IsEmail,
	ValidateNested,
	MinLength,
} from 'class-validator';

import { TelefoneDTO } from '../../telefones/dto/telefone.dto';
export class CreateContatoDTO {
	@IsString({ message: 'O campo nome deve ser do tipo string' })
	@IsNotEmpty({ message: 'O campo nome do contato não pode estar vazio' })
	@MinLength(3, {message: "O número de caracteres deve ser superior a 3"})
	nome: string;

	@IsString({ message: 'O campo sobrenome deve ser do tipo string' })
	@IsNotEmpty({ message: 'O campo sobrenome do contato não pode estar vazio' })
	@MinLength(3, {message: "O número de caracteres deve ser superior a 3"})
	sobrenome: string;

	@IsString({ message: 'O campo email deve ser do tipo string' })
	@IsNotEmpty({ message: 'O campo e-mail do contato não pode estar vazio' })
	@IsEmail()
	email: string;

	@IsArray({ message: 'O campo telefones deve ser do tipo array' })
	@IsNotEmpty({ message: 'É obrigatório informar um telefone' })
	@ArrayMinSize(1, { message: 'O contato deve ter no mínimo 1 telefone' })
	@ValidateNested({ each: true })
	@Type(() => TelefoneDTO)
	telefones: TelefoneDTO[];
}

import { IsNotEmpty, IsString } from "class-validator";

interface Telefone {
	numero: string;
	contatoId?: number
}

export class CreateContatoDTO {
	@IsString()
	@IsNotEmpty({ message: "O campo nome do contato não pode estar vazio"})
	nome: string;

	@IsString()
	@IsNotEmpty({ message: "O campo sobrenome do contato não pode estar vazio"})
	sobrenome: string;

	@IsString()
	@IsNotEmpty({ message: "O campo e-mail do contato não pode estar vazio"})
	email: string;

	@IsNotEmpty()
	telefones: Telefone[]
}

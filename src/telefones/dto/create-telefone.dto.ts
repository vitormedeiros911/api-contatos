import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTelefoneDTO {
	@IsString({ message: 'O campo numero em telefones deve ser do tipo string' })
	@IsNotEmpty({ message: 'É necessário informar um número para o telefone' })
	numero: string;

	@IsInt()
	@IsOptional()
	@IsNotEmpty({
		message: 'É necessário informar o ID do contato para o telefone',
	})
	contatoId: number;
}

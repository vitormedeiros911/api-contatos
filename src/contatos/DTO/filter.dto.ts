import { IsOptional, IsString } from 'class-validator';

export class FilterDTO {
	@IsOptional()
	@IsString()
	nome: string;
	@IsOptional()
	@IsString()
	email: string;
}

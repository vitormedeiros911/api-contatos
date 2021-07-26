import { OmitType } from "@nestjs/mapped-types";
import { IsOptional } from "class-validator";
import { CreateContatoDTO } from "./create-contato.dto";

export class UpdateContatoDTO extends OmitType(CreateContatoDTO, ["telefones"] as const) {
	@IsOptional()
	nome: string;
	sobre: string;
	email: string;
}

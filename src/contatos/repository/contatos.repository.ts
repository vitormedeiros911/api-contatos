import { EntityRepository, Repository } from "typeorm";

import { Contato } from '../model/contato.entity';

@EntityRepository(Contato)
export class ContatoRepository extends Repository<Contato> {

}

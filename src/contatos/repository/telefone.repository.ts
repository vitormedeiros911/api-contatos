import { EntityRepository, Repository } from "typeorm";
import { Telefone } from '../model/telefone.entity';

@EntityRepository(Telefone)
export class TelefoneRepository extends Repository<Telefone> {

}

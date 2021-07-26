import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Contato } from 'src/contatos/contato.entity';
import { Telefone } from 'src/telefones/telefone.entity';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'contatos',
	entities: [Contato, Telefone],
  synchronize: true,
};

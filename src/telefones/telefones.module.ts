import { Module } from '@nestjs/common';
import { TelefonesService } from './telefones.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TelefoneRepository } from './telefone.repository';

@Module({
	imports: [TypeOrmModule.forFeature([TelefoneRepository])],
	providers: [TelefonesService],
	exports: [TelefonesService]
})
export class TelefonesModule {}

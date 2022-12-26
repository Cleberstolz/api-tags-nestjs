import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PalavraController } from './palavra.controller';
import { PalavraService } from './palavra.service';
import { palavraProviders } from './palavra.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [PalavraController],
    providers: [
        ...palavraProviders,
        PalavraService
    ],
    exports: [PalavraService]
})
export class PalavraModule {}
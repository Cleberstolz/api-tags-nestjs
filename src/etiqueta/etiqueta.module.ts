import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { EtiquetaController } from './etiqueta.controller';
import { etiquetaProviders } from './etiqueta.providers';
import { EtiquetaService } from './etiqueta.service';

@Module({
  imports: [DatabaseModule],
  controllers:[EtiquetaController],
  providers: [
    ...etiquetaProviders,
    EtiquetaService,
  ],
  exports: [EtiquetaService]
})
export class EtiquetaModule {}
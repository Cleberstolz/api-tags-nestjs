import { Module } from '@nestjs/common';
import { EtiquetaModule } from './etiqueta/etiqueta.module';
import { PalavraModule } from './palavra/palavra.module';

@Module({
  imports: [EtiquetaModule, PalavraModule],
})
export class AppModule {}

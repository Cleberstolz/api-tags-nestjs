import { DataSource } from 'typeorm';
import { EtiquetaEntity } from './etiqueta.entity';

export const etiquetaProviders = [
  {
    provide: 'ETIQUETA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(EtiquetaEntity),
    inject: ['DATA_SOURCE'],
  },
];
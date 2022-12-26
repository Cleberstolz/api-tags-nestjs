import { DataSource } from 'typeorm';
import { PalavraEntity } from './palavra.entity';

export const palavraProviders = [
  {
    provide: 'PALAVRA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(PalavraEntity),
    inject: ['DATA_SOURCE'],
  },
];
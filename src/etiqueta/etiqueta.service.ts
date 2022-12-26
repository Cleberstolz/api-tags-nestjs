import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { EtiquetaEntity } from './etiqueta.entity'

@Injectable()
export class EtiquetaService {
  constructor(
    @Inject('ETIQUETA_REPOSITORY')
    private etiquetaRepository: Repository<EtiquetaEntity>,
  ) { }

  async findAll(): Promise<EtiquetaEntity[]> {
    return this.etiquetaRepository.find();
  }

  async saveEtiqueta(etiqueta: any): Promise<EtiquetaEntity[]> {
    return this.etiquetaRepository.save(etiqueta);
  }

  async findOne(id: any): Promise<EtiquetaEntity> {
    return this.etiquetaRepository.findOneBy({ id });
  }

  async update(id: any, newValue): Promise<EtiquetaEntity | null> {

    await this.etiquetaRepository.update(id, newValue);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.etiquetaRepository.delete(id);
  }
}
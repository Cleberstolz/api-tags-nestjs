import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { PalavraEntity } from './palavra.entity';

@Injectable()
export class PalavraService {
    constructor(
        @Inject('PALAVRA_REPOSITORY')
        private palavraRepository: Repository<PalavraEntity>,
    ) { }

    async findAll(): Promise<PalavraEntity[]> {
        const palavras = await this.palavraRepository.find();
        return palavras
    }

    async savePalavra(palavra: any): Promise<PalavraEntity[]> {
        return this.palavraRepository.save(palavra);
    }

    async findOne(id: any): Promise<PalavraEntity> {
        return await this.palavraRepository.findOneBy({ id });
    }

    async update(id: any, newValue): Promise<PalavraEntity | null>{
        await this.palavraRepository.update(id, newValue);
        return await this.findOne(id);
    }

    async remove(id: string): Promise<void>{
        await this.palavraRepository.delete(id);
    }
}
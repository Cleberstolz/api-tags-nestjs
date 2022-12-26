import { Body, Controller, Get, Post, Delete, Param, Put } from "@nestjs/common";
import { PalavraService } from "./palavra.service";

@Controller('/palavras')
export class PalavraController {
    constructor(private palavraService: PalavraService) { }

    @Post()
    async criaPalavra(@Body() dadosDaPalavra) {
        const palavraSave = await this.palavraService.savePalavra(dadosDaPalavra);
        return {
            palavra: palavraSave,
            mensagem: 'palavra criada com sucesso'
        }
    }

    @Get()
    async listaPalavra() {
        return await this.palavraService.findAll();
    }

    @Get('/:id')
    async buscarUmaPalavra(@Param('id') id) {
        const palavraBuscada = await this.palavraService.findOne(id);
        return { palavra: palavraBuscada };
    }

    @Put('/:id')
    async atualizaPalavra(@Param('id') id, @Body() novosDados) {
        const palavraAtualizada = await this.palavraService.update(id, novosDados);
        return {
            palavra: palavraAtualizada,
            mensagem: "palavra atualizada com sucesso"
        }
    }

    @Delete('/:id')
    async removePalavra(@Param('id') id) {
        await this.palavraService.remove(id);
        return {
            mensagem: 'Palavra removida com sucesso',
        };
    }
}
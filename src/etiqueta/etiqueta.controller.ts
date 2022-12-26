import { Body, Controller, Get, Post, Delete, Param, Put } from "@nestjs/common";
import { EtiquetaService } from "./etiqueta.service";

@Controller('/etiquetas')
export class EtiquetaController {
    constructor(private etiquetaService: EtiquetaService) { }

    @Post()
    async criaEtiquetas(@Body() dadosDaEtiqueta) {
        const etiquetaSave = await this.etiquetaService.saveEtiqueta(dadosDaEtiqueta);
        return {
            etiqueta: etiquetaSave,
            mensagem: 'etiqueta criada com sucesso'
        }
    }

    @Get()
    async listaEtiqueta() {
        return await this.etiquetaService.findAll();
    }

    @Get('/:id')
    async buscarUmaEtiqueta(@Param('id') id) {
        const etiquetaBuscada = await this.etiquetaService.findOne(id)

        return { etiqueta: etiquetaBuscada };
    }

    @Put('/:id')
    async atualizaEtiqueta(@Param('id') id, @Body() novosDados) {
        const etiquetaAtualizada = await this.etiquetaService.update(id, novosDados)

        return {
            etiqueta: etiquetaAtualizada,
            mensagem: "etiqueta atualizado com sucesso" 
        }
    }

    @Delete('/:id')
    async removeEtiqueta(@Param('id') id){
        await this.etiquetaService.remove(id);
        return {
            mensagem: 'Etiqueta removida com sucesso',
        };
    }
}
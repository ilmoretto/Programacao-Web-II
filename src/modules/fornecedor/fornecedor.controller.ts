import { Body, Controller, Get, Post, Redirect, Render } from "@nestjs/common";
import { FornecedorService } from "./fornecedor.service";
import { ValidationView } from "nest-validation-view";
import { CreateFornecedorDto } from "./dtos/create-fornecedor.dto";




@Controller('fornecedores')
export class FornecedorController {

    constructor(private fornecedorService: FornecedorService) {}

    @Get()
    @Render('fornecedor/inicial')
    async inicial(): Promise<object> {
        const listaFornecedores = await this.fornecedorService.findAll();

        return {
            titulo: 'Consulta de Fornecedores',
            fornecedores: listaFornecedores
        }
    }

    @Get('criar')
    @Render('fornecedor/formulario')
    async formularioCriar(): Promise<object> {
        return {
            titulo: 'Novo fornecedor',
        };
    }

    @Post('criar')
    @Redirect('/fornecedores')
    @ValidationView('fornecedor/formulario', ({ request, errors }) => ({
        fornecedor: {
            ...request.body,
        },
        errors,
    }))
    async formularioCriarSalvar(@Body() dados: CreateFornecedorDto): Promise<void> {
        await this.fornecedorService.create(dados);
    }

}
import { Injectable } from "@nestjs/common";
import { Fornecedor } from "./fornecedor.entity";
import { CreateFornecedorDto } from "./dtos/create-fornecedor.dto";
@Injectable()
export class FornecedorService {     
    async findAll(): Promise<Fornecedor[]> {
        // return Fornecedor.find({
        //     select: {
        //         id: true,
        //         nome: true,
        //         cnpj: true,
        //         ativo: true,
        //         criadoEm: true
        //     }
        // });
        return Fornecedor.find();
    }

    async findOne(id: number): Promise<Fornecedor | null> {
        return Fornecedor.findOne({
            where: { id }           
        });
    }

    async create(dados: CreateFornecedorDto): Promise<Fornecedor> {
        const fornecedor = Fornecedor.create({ ...dados });

        return fornecedor.save();
    }
}
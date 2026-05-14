import { Type } from "class-transformer";
import { IsNotEmpty, MinLength, Min, IsNumber } from "class-validator";

export class CreateProdutoDto{
    @IsNotEmpty({message: 'O nome do produto é obrigatório.'})
    @MinLength(5, {message: 'O nome do produto deve conter pelo menos 5 caracteres.'})
    nome!: string;

    // descricao!: string;

    @IsNumber()
    @Min(0.01, {message: 'O preço do produto deve ser pelo menos R$0,01.'})
    @Transform(({ value }) => toDecimalNumber(value))
    @Type (() => Number)
    preco!: number;
}
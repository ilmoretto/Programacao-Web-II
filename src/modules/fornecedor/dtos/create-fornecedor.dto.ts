import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, MinLength } from "class-validator";
import { toBoolean } from "nest-validation-view";

export class CreateFornecedorDto {
  @IsNotEmpty({ message: "O campo nome e obrigatorio" })
  @MinLength(5, { message: "O nome deve ter no minimo 5 caracteres" })
  nome!: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => toBoolean(value, true))
  ativo?: boolean;
}

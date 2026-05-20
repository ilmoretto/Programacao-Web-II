import { Transform } from "class-transformer";
import { IsBoolean, IsNotEmpty } from "class-validator";
import { toBoolean } from "nest-validation-view";
import { CreateProdutoDto } from "./create-produto.dto";

export class UpdateProdutoDto extends CreateProdutoDto {
  @IsBoolean()
  @IsNotEmpty({ message: "O campo ativo é obrigatório" })
  @Transform(({ value }) => toBoolean(value, true))
  ativo!: boolean;
}

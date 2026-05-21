import { Module } from "@nestjs/common";
import { ProdutoController } from "./produto.controller";
import { ProdutoService } from "./produto.service";
import { FornecedorModule } from "../fornecedor/fornecedor.module";

@Module({
    imports: [FornecedorModule],
    controllers: [ProdutoController],
    providers: [ProdutoService],
})
export class ProdutoModule {}
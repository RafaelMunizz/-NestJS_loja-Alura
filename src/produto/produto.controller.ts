import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaProdutoDTO } from './dto/criaProduto.dto';
import { ProdutoService } from './produto.service';

@Controller('/produto')
export class ProdutoController {

  private produtoService = new ProdutoService();

  @Post()
  async criarProduto(@Body() dadosProduto: CriaProdutoDTO) {
    this.produtoService.salvar(dadosProduto);
    return dadosProduto;
  }

  @Get()
  async listProdutos() {
    return this.produtoService.listar();
  }
}

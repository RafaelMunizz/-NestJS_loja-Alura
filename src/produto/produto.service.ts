
export class ProdutoService {
    private produtos = [];

    async salvar (produto) {
        this.produtos.push(produto);
    }

    async listar() {
        return this.produtos;
    }
}
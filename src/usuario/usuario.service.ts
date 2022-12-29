
export class UsuarioService {
    private usuarios = [];

    async salvar (usuario) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }
}
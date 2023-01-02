import { UsuarioEntity } from "./usuario.entity";

export class UsuarioService {
    private usuarios: UsuarioEntity[] = [];

    async salvar (usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        console.log(this.usuarios);
        
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
          (usuario) => usuario.email === email,
        );
    
        return possivelUsuario !== undefined;
    }

    async teste(email: string) {
        const possivelUsuario = this.usuarios.find(
          (usuario) => usuario.email === email,
        );
    
        return possivelUsuario !== undefined;
    }
}
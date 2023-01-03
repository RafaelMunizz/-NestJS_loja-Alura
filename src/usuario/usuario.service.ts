import { AtualizaUsuarioDTO } from "./dto/atualizaUsuario.dto";
import { UsuarioEntity } from "./usuario.entity";

export class UsuarioService {

    private usuarios: UsuarioEntity[] = [];

    async salvar (usuario: UsuarioEntity) {
        this.usuarios.push(usuario);
    }

    async listar() {
        return this.usuarios;
    }

    async existeComEmail(email: string) {
        const possivelUsuario = this.usuarios.find(
          (usuario) => usuario.email === email,
        );
    
        return possivelUsuario !== undefined;
    }

    private buscaPorId(id: string) {
        
        // Encontrando o usuário, caso ele exista
        const possivelUsuario = this.usuarios.find(
            usuarioSalvo => usuarioSalvo.id === id
        );


        // Se o usuário não existir, lance um erro
        if(!possivelUsuario){
            throw new Error("Usuário não existe!");
        }

        return possivelUsuario;
        
    }

    // Partial: Faz todas as propriedades de <...> serem opcionais
    async atualiza(id: string, novosDados: Partial<UsuarioEntity>) {

        const usuario = this.buscaPorId(id);
        
        // Retorna um array com as chaves e valores do objeto passado
        Object.entries(novosDados).forEach(([chave, valor]) => {
            if(chave === 'id') {
                return;
            }

            usuario[chave] = valor;
        });

        return usuario;
    }

    async remover(id: string) {
        
        const usuario = this.buscaPorId(id);
        this.usuarios = this.usuarios.filter(
            usuarioSalvo => usuarioSalvo.id !== id
        );

        return usuario;
    }
}
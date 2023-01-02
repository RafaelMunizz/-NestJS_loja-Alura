import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';

@Controller('/usuario')
export class UsuarioController {

  private usuarioService = new UsuarioService();

  @Post()
  async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.senha = dadosUsuario.senha;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.id = uuid();
    
    this.usuarioService.salvar(usuarioEntity);
    return { 
      usuario: new ListaUsuarioDTO(usuarioEntity.id, usuarioEntity.nome),
      message: 'Usuário criado com sucesso!'
    };
  }

  @Get()
  async listUsuarios() {

    /*
    const usuariosSalvos = await this.usuarioService.listar();
    const usuariosLista = usuariosSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );
    return usuariosLista;
    */

     return (await this.usuarioService.listar()).map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );
    
  }
}

import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/listaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/atualizaUsuario.dto';
import { DefaultSerializer } from 'v8';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

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
      mensagem: 'Usuário criado com sucesso!'
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
      
    console.log("CHEGOUUU");
     return (await this.usuarioService.listar()).map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );
  }

  @Put('/:id')
  async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioService.atualiza(id, novosDados);

    return {
      usuario: usuarioAtualizado,
      mensagem: 'Usuário atualizado com sucesso!',
    }
  }

  @Delete('/:id')
  async removeUsuario(@Param('id') id: string) {
      const usuarioRemovido = await this.usuarioService.remover(id);
  
      return {
          usuario: usuarioRemovido,
          mensagem: 'usuário removido com sucesso'
      }
  }
}

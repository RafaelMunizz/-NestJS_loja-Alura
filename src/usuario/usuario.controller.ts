import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriaUsuarioDTO } from './dto/criaUsuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('/usuario')
export class UsuarioController {

  private usuarioService = new UsuarioService();

  @Post()
  async criarUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    this.usuarioService.salvar(dadosUsuario);
    return dadosUsuario;
  }

  @Get()
  async listUsuarios() {
    return this.usuarioService.listar();
  }
}

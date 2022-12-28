import { Body, Controller, Get, Post } from '@nestjs/common';


@Controller('/teste')
export class UsuarioController {

    @Post()
    async mostrarTeste(@Body() dadosUsuario) {
        return dadosUsuario;
    }

}

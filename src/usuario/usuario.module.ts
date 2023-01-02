import { Module } from "@nestjs/common";
import { UsuarioController } from "./usuario.controller";
import { UsuarioService } from "./usuario.service";
import { EmailValidator } from "./validator/email.validator";

@Module({
    imports: [],
    controllers: [UsuarioController],
    providers: [UsuarioService, EmailValidator]
  })
  export class UsuarioModule {}
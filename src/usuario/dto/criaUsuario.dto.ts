import { IsString,  IsEmail, IsNotEmpty, MinLength } from "class-validator";

// Criando um tipo que será usado nos controllers e que será validado
export class CriaUsuarioDTO {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsEmail()
    email: string;

    @MinLength(6)
    senha: string;
}
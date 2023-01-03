import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UsuarioService } from "../usuario.service";

// Transformando em um Decorator
@Injectable()
@ValidatorConstraint({ async:true }) // Informando que ele deve esperar a execução
export class EmailValidator implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService) {}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const usuarioComEmailExiste = await this.usuarioService.existeComEmail(value);

        return !usuarioComEmailExiste;
    }
} 

export const EmailEhUnico = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: EmailValidator
        });
    }
}

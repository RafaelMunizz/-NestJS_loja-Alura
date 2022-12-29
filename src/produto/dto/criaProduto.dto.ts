import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsNotEmpty, IsNumber, IsPositive, IsString, MaxLength, Min, ValidateNested } from "class-validator";
import { min } from "rxjs";
import { CaracteristicaProdutoDTO } from "./caracteristicaProdutoDTO.dto";
import { ImagemProdutoDTO } from "./imagemProdutoDTO.dto";

// Criando um tipo que será usado nos controllers e que será validado
export class CriaProdutoDTO {

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsNumber()
    @Min(1)
    valor: number;

    @IsNumber()
    @Min(0)
    quantidadeDisponivel: number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    descricao: string;

    @ValidateNested()
    @IsArray()
    @ArrayMinSize(3)
    @Type(() => CaracteristicaProdutoDTO)
    caracteristicas: CaracteristicaProdutoDTO[];

    @ValidateNested()
    @IsArray() 
    @ArrayMinSize(1)
    @Type(() => ImagemProdutoDTO)
    imagens: ImagemProdutoDTO[];

    @IsString()
    @IsNotEmpty()
    categoria: string;

    //dataCriacao: string;
    //dataAtualizacao: string;
}
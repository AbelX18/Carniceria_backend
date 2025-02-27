import { IsNotEmpty, IsString, MinLength } from 'class-validator'

export class CreateSaleDto {
    
    @IsString()
    @MinLength(1)
    dniCliente: string

    @IsString()
    @IsNotEmpty()
    tipoDeObjeto: string
    
    @IsString()
    @IsNotEmpty()
    descripcionProblema: string
    
    @IsString()
    @IsNotEmpty()
    aclaraciones: string
    
    @IsString()
    @IsNotEmpty()
    estado: string
}

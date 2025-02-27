import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator'

export class CreateProductDto {
    @IsString()
    @MinLength(1)
    nombre: string

    @IsNumber()
    @IsNotEmpty()
    precio: number

    @IsNumber()
    @IsNotEmpty()
    cantidad: number

    @IsString()
    @IsNotEmpty()
    categoria: string

    @IsString()
    @IsNotEmpty()
    subcategoria: string
    
}

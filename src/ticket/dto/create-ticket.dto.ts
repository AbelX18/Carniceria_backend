import { Type } from "class-transformer"
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateTicketDto {
    @IsString()
    @IsNotEmpty()    
    comprador:string

    @IsNumber()
    @IsNotEmpty()
    total: number

    @IsDate()
    @Type(() => Date)
    fechacompra: Date
}

import { IsNotEmpty, IsNumber } from "class-validator"

export class CreateItemDto {
    @IsNumber()
    @IsNotEmpty()
    ticketId: number

    @IsNumber()
    @IsNotEmpty()
    productId: number

    @IsNumber()
    @IsNotEmpty()
    quantity: number

    @IsNumber()
    price: number
}

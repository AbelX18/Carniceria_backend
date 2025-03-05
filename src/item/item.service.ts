import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService){}

  async create(data: CreateItemDto) {
    const productExist = await this.prisma.product.findUnique({where: {id : data.productId}})

    if(!productExist){
      return new NotFoundException(`Product with Id ${data.productId} is not found`)
    }

    if(productExist.cantidad < data.quantity){
      return new NotFoundException(`The quantity entered exceeds the quantity left in stock`)
    }
    data.price = parseFloat(productExist.precio.toString()) * data.quantity

    return this.prisma.ticketItem.create({data})
  }

  async findAll() {
    return this.prisma.ticketItem.findMany()
  }

  async findOne(ticketId: number, productId: number) {
    return this.prisma.ticketItem.findUnique({where: {ticketId_productId:{ ticketId,productId} }})
  }

  async update(ticketId: number, productId: number, data: UpdateItemDto) {
    const item = await this.prisma.ticketItem.findUnique({where: {ticketId_productId:{ticketId, productId}}})

    if(!item){
      return new NotFoundException(`Item with ticketId ${ticketId} and/or productId ${productId} is not found`)
    }

    return this.prisma.ticketItem.update({where: {ticketId_productId:{ticketId,productId}}, data})
  }

  async remove(ticketId: number, productId: number) {
    return this.prisma.ticketItem.delete({where: {ticketId_productId: {ticketId, productId}}});
  }
}

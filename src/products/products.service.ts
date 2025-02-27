import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService){}

  async create(data : CreateProductDto) {
    return this.prisma.product.create({data})
  }

  async findAll() {
    return this.prisma.product.findMany()
  }

  async findOne(id: number) {
    const productFound = await this.prisma.product.findUnique({where: {id}});

    if(!productFound){
      return new NotFoundException(`Product with id ${id} is not found`)
    }

    return productFound
  }

  async update(id: number, data: UpdateProductDto) {
    const productFound = await this.prisma.product.findUnique({where: {id}})
    
    if(!productFound){
      return new NotFoundException(`Product with id ${id} is not found`)
    }

    return this.prisma.product.update({where: {id}, data})
  }

  async remove(id: number) {
    const productFound = await this.prisma.product.findUnique({where: {id}})
    
    if(!productFound){
      return new NotFoundException(`Product with id ${id} is not found`)
    }

    return this.prisma.product.delete({
      where: {id}
    })
  }
}

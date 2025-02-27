import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SaleService {
  constructor(private prisma: PrismaService){}

  async create(data: CreateSaleDto) {
    return this.prisma.objectClient.create({data})
  }

  async findAll() {
    return this.prisma.objectClient.findMany()
  }

  async findOne(id: number) {
    return this.prisma.objectClient.findUnique({where: {id}})
  }

  async update(id: number, data: UpdateSaleDto) {
    return this.prisma.objectClient.update({where: {id}, data})
  }

  async remove(id: number) {
    return this.prisma.objectClient.delete({where: {id}})
  }
}

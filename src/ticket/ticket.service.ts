import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TicketService {
  constructor(private prisma: PrismaService){}

  async create(data: CreateTicketDto) {
    return this.prisma.ticket.create({data})
  }

  async findAll() {
    return this.prisma.ticket.findMany()
  }

  async findOne(id: number) {
    return this.prisma.ticket.findUnique({where: {id}})
  }

  async update(id: number, data: UpdateTicketDto) {
    const ticket= await this.prisma.ticket.findUnique({where: {id}})

    if(!ticket){
      return new NotFoundException(`Ticket with Id ${id} is not found`)
    }

    return this.prisma.ticket.update({where:{id}, data})
  }

  async remove(id: number) {
    const ticket= await this.prisma.ticket.findUnique({where: {id}})

    if(!ticket){
      return new NotFoundException(`Ticket with Id ${id} is not found`)
    }

    return this.prisma.ticket.delete({where:{id}})
  }
}

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      return await this.prisma.user.create({
        data: {
          nombre: createUsuarioDto.nombre,
          dni: createUsuarioDto.dni,
          correo: createUsuarioDto.correo,
          contraseña: createUsuarioDto.contraseña,
          isSuperUser: createUsuarioDto.isSuperUser ?? false,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(
        `Error creating usuario: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario #${JSON.stringify(updateUsuarioDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      createUsuarioDto.dni = createUsuarioDto.dni.replace(/\./g, '');
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

  //ver despues donde mostrar el mensaje de que no hay usuarios
  findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id,
      },
    });
    console.log('esto devuelve el findOne', user);
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }
    return user;
  }

  async update(userId: number, updateData: UpdateUsuarioDto) {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(updateData).filter(
          ([, value]) => value !== '' && value !== null,
        ),
      );

      if (Object.keys(filteredData).length === 0) {
        throw new Error('No valid fields provided for update.');
      }

      const updatedUser = await this.prisma.user.update({
        where: { id: userId },
        data: filteredData,
      });

      return updatedUser;
    } catch (error) {
      throw new Error(
        `Error updating user: ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.user.delete({
        where: { id },
      });
    } catch {
      throw new NotFoundException(`El usuario con ID ${id} no existe`);
    }
  }
}

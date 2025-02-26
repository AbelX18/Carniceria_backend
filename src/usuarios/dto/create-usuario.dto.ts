/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  dni: string;

  @IsEmail()
  correo: string;

  @IsString()
  contraseña: string;

  @IsOptional()
  @IsBoolean()
  isSuperUser?: boolean;
}

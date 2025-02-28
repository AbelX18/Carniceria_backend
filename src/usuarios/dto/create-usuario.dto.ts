import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';
export class CreateUsuarioDto {
  @IsString()
  nombre: string;

  @IsString()
  @Matches(/^\d{1,2}\.?\d{3}\.?\d{3}$/)
  dni: string;

  @IsEmail()
  correo: string;

  @IsString()
  contraseña: string;

  @IsOptional()
  @IsBoolean()
  isSuperUser?: boolean;
}

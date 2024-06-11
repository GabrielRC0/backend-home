// src/users/dto/create-user.dto.ts
export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly adminUuid?: string; // Campo opcional para o UUID do administrador
}

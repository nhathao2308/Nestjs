import { Exclude } from 'class-transformer'
import { IsString } from 'class-validator'

export class LoginDTO {
  @IsString()
  email: string
  @IsString()
  password: string
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  name: string
  @IsString()
  confirmPassword: string
}

export class RegisterResponseDTO {
  id: number
  email: string
  name: string
  @Exclude() password: string
  createAt: Date
  updateAt: Date

  constructor(partial: Partial<RegisterResponseDTO>) {
    Object.assign(this, partial)
  }
}

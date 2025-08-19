import { Exclude, Type } from 'class-transformer'
import { IsString } from 'class-validator'
import { SuccessResponsedDTO } from 'src/shared/shared.dto'

export class LoginDTO {
  @IsString()
  email: string
  @IsString()
  password: string
}

export class LoginResponseDTO {
  accessToken: string
  refreshToken: string

  constructor(partial: Partial<LoginResponseDTO>) {
    Object.assign(this, partial)
  }
}

export class RegisterDTO extends LoginDTO {
  @IsString()
  name: string
  @IsString()
  confirmPassword: string
}

class RegisterData {
  id: number
  email: string
  name: string
  @Exclude() password: string
  createAt: Date
  updateAt: Date

  constructor(partial: Partial<RegisterData>) {
    Object.assign(this, partial)
  }
}

export class RegisterResponseDTO extends SuccessResponsedDTO {
  @Type(() => RegisterData)
  declare data: RegisterData

  constructor(partial: Partial<SuccessResponsedDTO>) {
    super(partial)
    Object.assign(this, partial)
  }
}

export class RefreshTokenBodyDTO {
  @IsString()
  refreshToken: string
}

export class RefreshTokenResponeDTO extends LoginResponseDTO {}

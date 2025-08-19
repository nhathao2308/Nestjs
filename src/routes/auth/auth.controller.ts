import { Body, Controller, Post, SerializeOptions } from '@nestjs/common'
import { AuthService } from './auth.service'
import { LoginDTO, LoginResponseDTO, RefreshTokenBodyDTO, RegisterDTO, RegisterResponseDTO } from './auth.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @UseInterceptors(ClassSerializerInterceptor)
  @SerializeOptions({ type: RegisterResponseDTO })
  @Post('register')
  async register(@Body() body: RegisterDTO) {
    const result = await this.authService.register(body)

    return result
    // return new RegisterResponseDTO(result)
  }

  @Post('login')
  async Login(@Body() body: LoginDTO) {
    const result = await this.authService.Login(body)
    return new LoginResponseDTO(result)
  }

  @Post('refresh-token')
  async RefreshToken(@Body() body: RefreshTokenBodyDTO) {
    const result = await this.authService.refreshToken(body.refreshToken)
    return new LoginResponseDTO(result)
  }
}

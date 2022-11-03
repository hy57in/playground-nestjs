import { Controller } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
}

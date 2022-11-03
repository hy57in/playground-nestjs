import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';
import { AuthCredentialsDto } from 'src/auth/dto/auth-credentials.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const user = this.create({ username, password });
    await this.save(user);
  }
}

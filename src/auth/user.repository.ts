import { Repository } from 'typeorm';
import { User } from 'src/auth/user.entity';

export class UserRepository extends Repository<User> {}

import { Inject, Injectable } from '@nestjs/common';
import { CONNECTION } from 'src/tenancy/tenancy.module';
import { TenantService } from 'src/tenancy/tenancy.service';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
@TenantService()
export class UsersService {
  constructor(@Inject(CONNECTION) private connection: Connection) {}

  create(createUserDto: CreateUserDto) {
    const repository = this.connection.getRepository(User);
    return repository.save(createUserDto);
  }

  async findAll(): Promise<User[]> {
    const repository = this.connection.getRepository(User);
    return repository.find();
  }

  findOne(id: number): Promise<User> {
    const repository = this.connection.getRepository(User);
    return repository.findOne(id);
  }

  update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const repository = this.connection.getRepository(User);
    return repository.save({ id: Number(id), ...updateUserDto });
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import { Column, Entity, Index, OneToOne } from 'typeorm';
import { Base } from './base';
import { UserInstituteEntity } from './institute.entity';

@Entity('users')
export class UserEntity extends Base {
  @Index('IDX_UQ_USER_EMAIL', { unique: true })
  @Column({ type: 'varchar', length: 64 })
  email: string;

  @Column({ type: 'varchar', length: 64 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  password: string;

  @OneToOne(() => UserInstituteEntity, (userInstitute) => userInstitute.user)
  userInstitute: UserInstituteEntity;
}

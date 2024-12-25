import { Column, DeleteDateColumn, Entity, Index, OneToMany } from 'typeorm';
import { Base } from './base';
import { UserInstituteEntity } from './institute.entity';

@Entity('users')
export class UserEntity extends Base {
  @Index('IDX_UQ_user_email', { unique: true })
  @Column({ type: 'varchar', length: 300 })
  email!: string;

  @Column({ type: 'varchar', length: 300 })
  name!: string;

  @Column({ type: 'varchar', length: 300, default: null, nullable: true })
  password_hash!: string;

  @DeleteDateColumn({ type: 'timestamptz', default: null })
  deleted_at!: Date | null;

  @OneToMany(() => UserInstituteEntity, (userInstitute) => userInstitute.user)
  userInstitute!: UserInstituteEntity[];
}

import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';

@Entity('user_institute')
export class UserInstituteEntity extends Base {
  @ManyToOne(() => UserEntity, (user) => user.userInstitute, { cascade: true })
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'varchar', length: 64 })
  institute: string;

  @Column({ type: 'varchar', length: 64 })
  board: string;

  @Column({ type: 'varchar', length: 64 })
  medium: string;

  @Column({ type: 'varchar', length: 64 })
  class_name: string;

  @Column({ type: 'varchar', length: 64 })
  standard: string;

  @Column({ type: 'varchar', array: true })
  subjects: string[];
}

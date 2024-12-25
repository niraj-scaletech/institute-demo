import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from './base';
import { UserEntity } from './user.entity';

@Entity('user_institute')
export class UserInstituteEntity extends Base {
  @OneToOne(() => UserEntity, (user) => user.id)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @Column({ type: 'varchar', length: 64 })
  institute: string;

  @Column({ type: 'varchar', length: 64 })
  board: string;

  @Column({ type: 'varchar', length: 64 })
  medium: string;

  @Column({ type: 'varchar', length: 64 })
  class: string;

  @Column({ type: 'varchar', length: 64 })
  standard: string;

  @Column({ type: 'array' })
  subjects: string[];
}

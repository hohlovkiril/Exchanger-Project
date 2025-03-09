import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, BeforeUpdate, BeforeInsert } from 'typeorm';
import { Permission, Role } from 'src/common';
import { MediaEntity } from './media.entity';

@Entity({
  name: 'user'
})
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', unique: false, nullable: false })
  firstName: string;

  @Column({ type: 'text', unique: false, nullable: false })
  lastName: string;

  @Column({ type: 'text', unique: false, nullable: false })
  fullName: string;

  @Column({ type: 'text', unique: true, nullable: false })
  username: string;

  @Column({ type: 'text', unique: true, nullable: false })
  email: string;

  @Column({ type: 'text', unique: true, nullable: false })
  phone: string;

  @Column({ type: 'enum', enum: Role, default: Role.Client })
  role: Role;

  @Column({ type: 'enum', enum: Permission, array: true, default: [] })
  permissions: Permission[];

  @Column({ type: 'text', unique: false, nullable: false })
  plainPassword: string;

  @Column({ type: 'text', unique: false, nullable: false })
  password: string;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public createdAt: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public updatedAt: Date;

  @Column({
    type: 'timestamp with time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  public lastOnlineAt: Date;

  /** Relatations */
  
  @OneToOne(() => MediaEntity, (media) => media.user, { onDelete: 'SET NULL', nullable: true })
  @JoinColumn()
  avatar: MediaEntity;

  /** Actions */

  @BeforeInsert()
  createFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  @BeforeUpdate()
  updateFullName() {
    this.fullName = `${this.firstName} ${this.lastName}`;
  }
}
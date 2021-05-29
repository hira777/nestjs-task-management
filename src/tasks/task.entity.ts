import { Exclude } from 'class-transformer';
import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  // エンティティには少なくとも1つのプライマリカラムを宣言する必要がある。
  // 以下の場合、uuid 値のプライマリカラムが自動で生成される。
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  // TransformInterceptor でレスポンスを classToPlain(data) のように実行しており、
  // toPlainOnly: true にしているので、user プロパティはレスポンスから除外される。
  @Exclude({ toPlainOnly: true })
  user: User;
}

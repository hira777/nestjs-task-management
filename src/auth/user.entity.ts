import { Task } from 'src/tasks/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // エンティティには少なくとも1つのプライマリカラムを宣言する必要がある。
  // 以下の場合、uuid 値のプライマリカラムが自動で生成される。
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // unique: true で重複を許可しない
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user, { eager: true })
  tasks: Task[];
}

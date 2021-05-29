import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  // エンティティには少なくとも1つのプライマリカラムを宣言する必要がある。
  // 以下の場合、uuid 値のプライマリカラムが自動で生成される。
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}

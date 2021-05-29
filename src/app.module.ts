import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 15432,
      username: 'admin',
      password: 'admin',
      database: 'taskmanagement',
      // エンティティを自動で読み込む
      autoLoadEntities: true,
      // アプリケーション実行時にエンティティを DB スキーマに反映する
      synchronize: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}

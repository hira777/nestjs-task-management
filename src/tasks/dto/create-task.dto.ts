import { IsNotEmpty } from 'class-validator';

// DTO（Data Transfer Object）スキーマ
// DTO はネットワーク上でどのようにデータを送信するかを定義するオブジェクト
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}

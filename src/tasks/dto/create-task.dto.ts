// DTO（Data Transfer Object）スキーマ
// DTO はネットワーク上でどのようにデータを送信するかを定義するオブジェクト
export class CreateTaskDto {
  title: string;
  description: string;
}

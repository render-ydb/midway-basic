import { ApiProperty } from '@midwayjs/swagger';
export class TodoDto {
  @ApiProperty({ example: 1, description: 'ID' })
  id: number;

  @ApiProperty({ example: 'Todo 1', description: 'Title' })
  title: string;

  @ApiProperty({ example: 'Todo 1 description', description: 'Description' })
  description: string;
}

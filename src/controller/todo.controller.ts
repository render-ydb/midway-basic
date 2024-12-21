import {
  Controller,
  Get,
  Inject,
  Post,
  Param,
  Body,
  Put,
} from '@midwayjs/core';
import { TodoService } from '../service/todo.service';
import { TodoDto } from '../dto/todo.dto';
import { ApiTags } from '@midwayjs/swagger';

@ApiTags('todo')
@Controller('/api/todo')
export class TodoController {
  @Inject()
  todoService: TodoService;

  @Get('/:id')
  async todo(@Param('id') id: number) {
    return {
      success: true,
      message: 'OK',
      data: this.todoService.get(id),
    };
  }

  @Post('/')
  async create(@Body() todo: TodoDto) {
    console.log(todo);
    return {
      success: true,
      message: 'OK',
      data: this.todoService.create(todo),
    };
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() todo: TodoDto) {
    return {
      success: true,
      message: 'OK',
      data: this.todoService.update(id, todo),
    };
  }
}

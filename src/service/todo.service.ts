import { Provide } from '@midwayjs/core';
// import { ITodo } from '../interface';
import { TodoDto } from '../dto/todo.dto';
@Provide()
export class TodoService {
  private todos: TodoDto[] = [];

  async get(id: number) {
    return this.todos.find(todo => todo.id === id);
  }

  async create(todo: TodoDto) {
    this.todos.push(todo);
    console.log(this.todos, todo);
    return todo;
  }

  async update(id: number, todo: TodoDto) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos[index] = todo;
    }
    return todo;
  }

  async delete(id: number) {
    const index = this.todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}

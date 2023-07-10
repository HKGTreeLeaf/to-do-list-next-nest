import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
import { ToDoItemService } from './toDoItem.service';
import { ItemStatus, ToDoItem } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly toDoItemService: ToDoItemService) {}

  @Get('/api/toDoList')
  async getToDoItems(): Promise<ToDoItem[]> {
    return this.toDoItemService.toDoItems();
  }

  @Post('/api/toDoList')
  async createToDoItem(
    @Body() itemName: { title: string },
  ): Promise<ToDoItem[]> {
    try {
      await this.toDoItemService.createToDoItem(itemName.title);
      return this.toDoItemService.toDoItems();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Patch('/api/toDoList')
  async updateToDoItem(
    @Body() data: { itemId: string; itemName: string; itemStatus: ItemStatus },
  ): Promise<ToDoItem[]> {
    try {
      await this.toDoItemService.updateToDoItem(
        data.itemId,
        data.itemName,
        data.itemStatus,
      );
      return this.toDoItemService.toDoItems();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Delete('/api/toDoList')
  async deleteToDoItems(): Promise<ToDoItem[]> {
    try {
      await this.toDoItemService.deleteToDoItems();
      return this.toDoItemService.toDoItems();
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}

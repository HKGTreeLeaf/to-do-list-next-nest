import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ToDoItem, ItemStatus } from '@prisma/client';

@Injectable()
export class ToDoItemService {
  constructor(private prisma: PrismaService) {}

  async toDoItems(): Promise<ToDoItem[]> {
    return this.prisma.toDoItem.findMany({
      where: { NOT: [{ status: 'DELETED' }] },
      orderBy: [{ createdAt: 'desc' }],
    });
  }

  async createToDoItem(itemName: string): Promise<ToDoItem> {
    return this.prisma.toDoItem.create({
      data: {
        itemName,
      },
    });
  }

  async updateToDoItem(
    itemId: string,
    itemName: string,
    status: ItemStatus,
  ): Promise<ToDoItem> {
    return this.prisma.toDoItem.update({
      where: {
        id: itemId,
      },
      data: {
        itemName: itemName,
        status: status,
      },
    });
  }

  async deleteToDoItems() {
    return this.prisma.toDoItem.deleteMany({});
  }
}

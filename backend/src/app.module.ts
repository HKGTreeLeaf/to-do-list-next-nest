import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ToDoItemService } from './toDoItem.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, ToDoItemService],
})
export class AppModule {}

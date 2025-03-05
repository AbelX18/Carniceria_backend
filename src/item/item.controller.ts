import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post('/create')
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':ticketId/:productId')
  findOne(@Param('ticketId') ticketId: number,
          @Param('productId') productId: number) {
    return this.itemService.findOne(+ticketId,+productId);
  }

  @Patch(':ticketId/:productId')
  update(@Param('ticketId') ticketId: number,
         @Param('productId') productId: number,
         @Body() updateItemDto: UpdateItemDto) {
    return this.itemService.update(+ticketId, +productId, updateItemDto);
  }

  @Delete(':ticketId/:productId')
  remove(@Param('ticketId') ticektId: number,
         @Param('productId') productId:number) {
    return this.itemService.remove(+ticektId, +productId);
  }
}

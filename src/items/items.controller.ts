import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpCode,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  // @HttpCode(204)
  async findAll() {
    // return 'hh11';
    return this.itemService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params): Promise<Item> {
    return this.itemService.findOne(params.id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemService.create(createItem);
  }

  @Delete(':id')
  delete(@Param() params): Promise<any> {
    return this.itemService.delete(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() item: CreateItemDto): Promise<Item> {
    return this.itemService.update(params.id, item);
  }
}

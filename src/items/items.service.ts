import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(_id: string): Promise<Item> {
    return await this.itemModel.findOne({_id});
  }

  async create(createItemDto: CreateItemDto): Promise<Item> {
    const createItem = new this.itemModel(createItemDto);
    return await createItem.save();
  }

  async delete(_id: string): Promise<any> {
    return await this.itemModel.findOneAndRemove(_id);
  }

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, {new: true});
  }

}

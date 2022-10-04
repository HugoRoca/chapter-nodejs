import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    const product = this.productModel.findById(id).exec();

    if (!product) {
      throw new NotFoundException('Could not find product.');
    }

    return product;
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    const product = this.productModel
      .findByIdAndUpdate(
        id,
        {
          $set: updateProductDto,
        },
        { new: true },
      )
      .exec();

    if (!product) {
      throw new NotFoundException('Could not find product.');
    }

    return product;
  }

  remove(id: string) {
    return this.productModel.findByIdAndRemove(id).exec();
  }
}

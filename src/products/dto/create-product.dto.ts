import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  ValidateNested,
} from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly price: number;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly image: string;

  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;
}

import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { AuthGuard } from 'src/guards/auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Products } from 'src/entities/products.entity';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Role } from 'src/roles.enum';


@ApiTags("PRODUCTS")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  
  @Get()
  getProducts(@Query("page") page: number, @Query("limit") limit: number){

    if (page && limit) {

      return this.productsService.getProducts(page, limit);
    }
    else{
      return this.productsService.getProducts(1, 3)
    }
  }

  @Get("seeder")
  addProducts() {
    return this.productsService.addProducts()
  }

  @Get(":id")
  getProduct(@Param("id") id: string){
    return this.productsService.getProduct(id)
  }

  @ApiBearerAuth()
  @Put(":id")
  @Roles(Role.Admin)
  @UseGuards(AuthGuard, RolesGuard)
  updateProduct(@Param("id") id: string, @Body() product: Products) {
    return this.productsService.updateProduct(id, product)
  }

  @ApiBearerAuth()
  @Delete(":id")
  @UseGuards(AuthGuard)
  deleteUser(@Param("id") id: string) {
    return this.productsService.deleteProduct(id)
  }
}

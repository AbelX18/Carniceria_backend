import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [ProductsModule, SaleModule],
})
export class AppModule {}

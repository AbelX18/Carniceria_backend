import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { SaleModule } from './sale/sale.module';
import { TicketModule } from './ticket/ticket.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [ProductsModule, SaleModule, TicketModule, ItemModule],
})
export class AppModule {}

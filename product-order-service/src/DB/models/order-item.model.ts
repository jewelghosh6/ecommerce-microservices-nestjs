// import {
//   Table,
//   Column,
//   Model,
//   DataType,
//   ForeignKey,
//   BelongsTo,
// } from 'sequelize-typescript';
// import { Product } from './product.model';
// import { Order } from './order.model';

// @Table({ tableName: 'order_items' })
// export class OrderItem extends Model<OrderItem> {
//   @Column({
//     type: DataType.UUID,
//     defaultValue: DataType.UUIDV4,
//     primaryKey: true,
//   })
//   declare id: string;

//   @ForeignKey(() => Order)
//   @Column({ type: DataType.UUID })
//   orderId!: string;

//   @ForeignKey(() => Product)
//   @Column({ type: DataType.UUID })
//   productId!: string;

//   @Column({ type: DataType.INTEGER, allowNull: false })
//   quantity!: number;

//   @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
//   price!: number;

//   @BelongsTo(() => Product)
//   product!: Product;

//   @BelongsTo(() => Order)
//   order!: Order;
// }

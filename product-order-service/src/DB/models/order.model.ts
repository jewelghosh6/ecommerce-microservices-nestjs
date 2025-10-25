// import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
// import { OrderItem } from './order-item.model';

// @Table({ tableName: 'orders' })
// export class Order extends Model<Order> {
//   @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
//   declare id: string;

//   @Column({ type: DataType.UUID, allowNull: false })
//   customerId!: string;

//   @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
//   totalAmount!: number;

//   @Column({ type: DataType.ENUM('PENDING','CONFIRMED','FAILED'), allowNull: false, defaultValue: 'PENDING' })
//   status!: string;

//   @HasMany(() => OrderItem)
//   orderItems!: OrderItem[];
// }

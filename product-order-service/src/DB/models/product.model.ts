import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { OrderItem } from './order-item.model';
// import { OrderItem } from './order-item.model';

@Table({ tableName: 'products' })
export class Product extends Model<Product> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  price!: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  stock!: number;

  @HasMany(() => OrderItem)
  orderItems!: OrderItem[];
}

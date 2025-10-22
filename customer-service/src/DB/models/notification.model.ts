import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Customer } from './customer.model';

@Table({ tableName: 'notifications' })
export class Notification extends Model<Notification> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  // ✅ Foreign key relationship
  @ForeignKey(() => Customer)
  @Column({ type: DataType.UUID, allowNull: false })
  customerId!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  type!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  message!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  isRead!: boolean;

  // ✅ Association back to customer
  @BelongsTo(() => Customer)
  customer!: Customer;
}

import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Notification } from './notification.model';

@Table({ tableName: 'customers' })
export class Customer extends Model<Customer> {
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4, primaryKey: true })
  declare id: string;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  address?: string;

  // ✅ Relationship: One customer can have many notifications
  @HasMany(() => Notification)
  notifications!: Notification[];
}

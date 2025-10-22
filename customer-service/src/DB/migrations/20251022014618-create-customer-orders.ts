import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('customer_orders', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      externalOrderId: { type: DataTypes.UUID, allowNull: false },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'customers', key: 'id' },
        onDelete: 'CASCADE',
      },
      productId: { type: DataTypes.UUID, allowNull: false },
      productName: { type: DataTypes.STRING, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      totalPrice: { type: DataTypes.FLOAT, allowNull: false },
      orderStatus: {
        type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'CANCELLED', 'DELIVERED'),
        defaultValue: 'PENDING',
      },
      createdAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('customer_orders');
  },
};

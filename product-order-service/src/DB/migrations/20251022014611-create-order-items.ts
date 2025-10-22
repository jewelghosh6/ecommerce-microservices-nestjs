import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('order_items', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'orders', key: 'id' },
        onDelete: 'CASCADE',
      },
      productId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'products', key: 'id' },
        onDelete: 'CASCADE',
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('order_items');
  },
};

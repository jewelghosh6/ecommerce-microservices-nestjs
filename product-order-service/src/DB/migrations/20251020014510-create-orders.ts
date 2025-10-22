import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('orders', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      customerId: { type: DataTypes.UUID, allowNull: false },
      totalAmount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      status: { type: DataTypes.ENUM('PENDING','CONFIRMED','FAILED'), allowNull: false, defaultValue: 'PENDING' },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('orders');
  },
};

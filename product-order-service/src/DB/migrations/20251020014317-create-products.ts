import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
      stock: { type: DataTypes.INTEGER, allowNull: false },
      createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('products');
  },
};

import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('customers', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      phone: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
      createdAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('customers');
  },
};

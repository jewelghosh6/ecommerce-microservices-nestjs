import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('notifications', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: { model: 'customers', key: 'id' },
        onDelete: 'CASCADE',
      },
      title: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.TEXT, allowNull: false },
      isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
      createdAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updatedAt: { allowNull: false, type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('notifications');
  },
};

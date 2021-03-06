const { DataTypes, Sequelize, Model } = require('sequelize');
const config = require('./config.json').options;
const { sequelize } = require('./../Services/DB/DatabaseInterface');
const { Ship } = require('./Ship');
const { EquipmentType } = require('./EquipmentType');

class ShipEquipmentMapping extends Model {
}

const ShipEquipmentMappingAttribute = {
    ShipEquipmentMappingId: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    ShipId: {
        type: DataTypes.UUID,
        references: {
            model: Ship,
            key: 'ShipId'
        }
    },
    EquipmentTypeId: {
        type: DataTypes.UUID,
        references: {
            model: EquipmentType,
            key: 'EquipmentTypeId'
        }
    },
    Slot: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Efficiency: {
        type: DataTypes.STRING(20),
        allowNull: false
    }
}

ShipEquipmentMapping.init(ShipEquipmentMappingAttribute, { ...config, sequelize })

module.exports = {
    ShipEquipmentMapping,
    ShipEquipmentMappingAttribute
};
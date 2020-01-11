module.exports = (sequelize, DataTypes) => {
    return sequelize.define('quote', {
        quote: DataTypes.STRING
    });
}
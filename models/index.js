const Sequelize = require('sequelize');
const User = require('./test/user');
const Comment = require('./test/comment');
const Sensor = require('./sensor/sensor');
const NiModule = require('./sensor/niModule');
const VoltageChannel = require('./sensor/voltageChannel');
const CurrentChannel = require('./sensor/currentChannel');
const MicrophoneChannel = require('./sensor/microphoneChannel');
const AccelerometerChannel = require('./sensor/accelerometerChannel');
const ThermocoupleChannel = require('./sensor/thermocoupleChannel');
const SensorType = require('./sensor/sensorType');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;

db.User = User;
db.Comment = Comment;
db.Sensor = Sensor;
db.NiModule = NiModule;
db.VoltageChannel = VoltageChannel;
db.CurrentChannel = CurrentChannel;
db.MicrophoneChannel = MicrophoneChannel;
db.AccelerometerChannel = AccelerometerChannel;
db.ThermocoupleChannel = ThermocoupleChannel;
db.SensorType = SensorType;

User.init(sequelize);
Comment.init(sequelize);
Sensor.init(sequelize);
NiModule.init(sequelize);
VoltageChannel.init(sequelize);
CurrentChannel.init(sequelize);
MicrophoneChannel.init(sequelize);
AccelerometerChannel.init(sequelize);
ThermocoupleChannel.init(sequelize);
SensorType.init(sequelize);

User.associate(db);
Comment.associate(db);
Sensor.associate(db);
NiModule.associate(db);
VoltageChannel.associate(db);
CurrentChannel.associate(db);
MicrophoneChannel.associate(db);
AccelerometerChannel.associate(db);
ThermocoupleChannel.associate(db);
SensorType.associate(db);

module.exports = db;
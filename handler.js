const { LambdaEventAdapter } = require('./lib/LambdaEventAdapter');
const { Service } = require('./lib/Service');

module.exports.handler = async (event, context) => Service.invoke(LambdaEventAdapter.convert(event), context);


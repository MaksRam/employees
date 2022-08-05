const Redis = require('redis');

const redisHost = process.env.REDIS_HOST ?? 'localhost';
const url = `redis://${redisHost}:6379`

const redis = Redis.createClient({url});
redis.connect();

module.exports = redis;
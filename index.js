const express = require('express');
const redis = require('redis');
const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});

client.on('error', (err) => {
    console.error('Redis error:', err);
});

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        if (err) {
            return res.status(500).send('Error connecting to Redis');
        }
        const numVisits = parseInt(visits) || 0;
        res.send(`Number of visits is ${numVisits}`);
        client.set('visits', numVisits + 1);
    });
});                     

app.listen(8081, () => {
    console.log('Listening on port 8081');
    client.set('visits', 0); // Initialize visits cou
});
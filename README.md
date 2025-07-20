so we are going to make the http stuff something for the number of visits 


so we will have a node app and a redis server 

so it is to store the number of visits the redis server thing the node can but for fun lets do this ]

so in oreder to not over load the redis thing if the http thing like gets a lot of traffic we put 2 [containers ] a [redis ] and a [ node thing  ]



##
stuff about the docker compose 


if you want to rebuild the stuff again you do docker-compose up --build instead of docker-compose up 


listen is expose for you by the way !!!



const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
 ]

 you have to use the webservetrr  name thing for this in here for the index .js thing 



 whats with the status code 0 means all good 1,2,3 .. means something wentwrong 

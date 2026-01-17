import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv"; //to allow import of tokens

dotenv.config();

//Rate limit that allows 100 request per 60 sec
const ratelimit =  new Ratelimit({
    redis: Redis.fromEnv(), //import the tokens
    limiter: Ratelimit.slidingWindow(100, "60 s"), //limiting to 100 req per 60 seconds
});

export default ratelimit;
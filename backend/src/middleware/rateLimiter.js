import ratelimit from "../config/upstash.js" //Import the blueprints from the upstash js

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-id"); //use it here to wait also my id is usually use in authentication and usually put userID/ip-address so it can ratelimit user specifically
        if(!success){
            return res.status(429).json({
                message: "Too many reqeust! Please try again later."
            });
        }
        next(); //comtinue the process
    } catch (error) {
        console.log("Rate Limiter Error", error);
        next(error);
    }
};

export default rateLimiter;
import {Client} from "discord.js";
import apiCall from "./coc-api.mjs";
import { config } from "dotenv";
config()
const client= new Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})
client.once("ready",()=>{
    console.log("connected");
})
client.on("messageCreate",(msg)=>{
    console.log(msg)
    if(!msg.author.username=="coc info"){
    msg.reply(msg)
    }
})
apiCall(process.env.CLASH_API,playerTag)
client.login(process.env.BOT_TOKEN)

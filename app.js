import {Client} from "discord.js";
import dotenv from "dotenv"
dotenv.config()
const client= new Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})

client.once("ready",()=>{
    console.log("connected");
})
client.on("messageCreate",(msg)=>{
    console.log(msg);
})
client.login(process.env.BOT_TOKEN)

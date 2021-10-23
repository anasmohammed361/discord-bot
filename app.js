import {Client} from "discord.js";
import {apiCallPlayer,apiCallClan} from "./coc-api.mjs";
import { config } from "dotenv";
import mongoose from 'mongoose';
config()

let schema= new mongoose.Schema({
    command:String,
    use:String
},{collection:"commands"})
let modelD=mongoose.model("Command",schema)
let prefix=`???`;
let dbUri=process.env.DATA_BASE_URI;
const client= new Client({ intents: ['GUILDS', 'GUILD_MESSAGES']})
client.once("ready",()=>{
    console.log(`connected`);
})
client.on("messageCreate", async (msg)=>{
 try{   if(!msg.content.startsWith(prefix)||msg.author.id=="900983852674211920") return;
    if (msg.content.match(/help/gi) !== null) {
      await mongoose.connect(dbUri);
      let dataFromDb=await modelD.find()
      let ok=dataFromDb.map(elem=>[elem.command,elem.use])
      ok.forEach(elem=>{
          msg.channel.send(`${elem[0]}:${elem[1]}`)
      });return
    }
    if(msg.content.match(/player/gi)!==null){
     let data=await apiCallPlayer(process.env.CLASH_API,msg.content)
     let {name:thName,townHallLevel,expLevel,heroes}=data;
     [['name',thName],['townHallLevel',townHallLevel],['expLevel',expLevel],...heroes.map(elem=>[elem.name,elem.level])]
     .forEach(elem=>{
         msg.channel.send(`${elem[0]}:${elem[1]}`)
     });return
    }  
    if(msg.content.match(/clan/gi)!==null){
       let data= await apiCallClan(process.env.CLASH_API,msg.content)
       let {name:clName,type,clanLevel,warLeague,warWins,memberList}=data;
       let leaderName=memberList.filter(elem=>elem.role=="leader")[0].name;
       [[`name`,clName],[`type`,type],["clanLevel",clanLevel],["CWL-League",warLeague.name],["warWins",warWins],["Leader",leaderName]]
       .forEach(elem=>{
           msg.channel.send(`${elem[0]}:${elem[1]}`)
       });return
    } 
    else{  
            msg.reply("invalid command try ???help for list of commands")  
    }
    
    }
      catch(err){
          console.log(err);
      }finally{
          mongoose.connection.close()
      }
});
client.login(process.env.BOT_TOKEN);

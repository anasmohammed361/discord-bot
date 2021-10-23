export  async function apiCallPlayer(token,tag){
 try{
  let {default:tagConverter}=await import("./tagConverter.mjs");
  let {default:clashApi}=await import("clash-of-clans-api");
  let client = clashApi({
    token:token
  })
  let tags=tag.match(/[a-z 0-9]/gi).join("").split(/[ ]+/g).filter(elem=>elem!="player");
  let data=await client.playerByTag(tagConverter(...tags));
  return data
}
  catch(err){
    console.log(err);
  }
};
export  async function apiCallClan(token,tag){
  try{
   let {default:tagConverter}=await import("./tagConverter.mjs")
   let {default:clashApi}=await import("clash-of-clans-api");
   let client = clashApi({
     token: token
   })
   let tags=tag.match(/[a-z 0-9]/gi).join("").split(/[ ]+/g).filter(elem=>elem!="clan")
   let data=await client.clanByTag(tagConverter(...tags));
   return data
 }
   catch(err){
     console.log(err);
   }
 };
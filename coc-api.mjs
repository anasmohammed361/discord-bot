export  async function apiCallPlayer(token,tag){
 try{
  let {tagConverter,commandToTag}=await import("./tagConverter.mjs");
  let {default:clashApi}=await import("clash-of-clans-api");
  let client = clashApi({
    token:token
  })
  let tags=commandToTag(tag,"player")
  let data=await client.playerByTag(tagConverter(...tags));
  return data
}
  catch(err){
    console.log(err);
  }
};
export  async function apiCallClan(token,tag){
  try{
   let {tagConverter,commandToTag}=await import("./tagConverter.mjs")
   let {default:clashApi}=await import("clash-of-clans-api");
   let client = clashApi({
     token: token
   })
   let tags=commandToTag(tag,"clan")
   let data=await client.clanByTag(tagConverter(...tags));
   return data
 }
   catch(err){
     console.log(err);
   }
 };
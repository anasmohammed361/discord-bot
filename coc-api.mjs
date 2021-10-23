export  async function apiCallPlayer(token,tag){
 try{
   let {default:tagConverter}=await import("./tagConverter.mjs")
  let {default:clashApi}=await import("clash-of-clans-api");
  let client = clashApi({
    token: token
  })
  let data=await client.playerByTag(tagConverter(tag));
  console.log(data);
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
   let data=await client.clanByTag(tagConverter(tag));
   console.log(data);
 }
   catch(err){
     console.log(err);
   }
 };

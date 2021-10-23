export default async function apiCall(token){
 try{
  let {default:clashApi}=await import("clash-of-clans-api");
  let client = clashApi({
    token: token
  })
  let data=await client.playerByTag("#YJORL98Q9");
  console.log(data);
}
  catch(err){
    console.log(err);
  }
};

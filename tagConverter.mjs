export  function tagConverter(str){
  if(!str.startsWith("#")) str=`#${str}`
  return str.toUpperCase()
}
export function commandToTag(str,exp){
  let expression=new RegExp(exp,'gi')
  let output= str.replace(expression,"");
  return output.replace(/[? +]/g,"")
}
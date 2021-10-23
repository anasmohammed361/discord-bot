export default function tagConverter(str){
  if(!str.startsWith("#")) str=`#${str}`
  return str.toUpperCase()
}


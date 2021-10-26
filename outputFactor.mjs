export default function outputFactor(...values){
    let output=""
    for(let j of values){
        output=`${output}\n${j}`
    }
    return output;
}
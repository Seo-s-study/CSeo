// const ret=[1,2,3,4,5,11,12]
// let a=0
// for(let i=0;i<ret.length;i++){
//     a=Math.max(ret[i], a)
// }

// console.log(a)

const ret=[1,2,3,4,5,11,12]
let a=0

const findMax=(list)=>{
    for(let i=0;i<list.length;i++){
        a=Math.max(list[i], a)
    }    
}

findMax(ret);

console.log(a)
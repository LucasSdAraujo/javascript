/*
let valores = [8, 1, 7, 4, 2, 9]
for(let pos=0;pos < valores.length ; pos++ ){
    console.log(`Aposiçao ${pos} tem o valor ${valores[pos]}`)
}
*/

let valores = [8, 1, 7, 4, 2, 9]
valores.sort()// <- esse comando bota na ordem crescente
for(let pos in valores ){
    console.log(`Aposiçao ${pos} tem o valor ${valores[pos]}`)
}
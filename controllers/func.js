const sayHello = {
    say:'hello'
}

const showText = ()=> {
    return 'Welcome cards app'
 }

const sortArr = (arr)=>{
    return arr.sort((a,b)=>{return b-a})
}
module.exports = {sayHello, showText, sortArr}
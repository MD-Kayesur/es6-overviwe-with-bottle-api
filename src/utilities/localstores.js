const  getLocalStores = ()=>{
    const storeCartString = localStorage.getItem('cart')
    if (storeCartString ) {
         return  JSON.parse(storeCartString)
    }
    return []
}

const saveLocalStores= cart =>{
const saveCart = JSON.stringify(cart)
localStorage.setItem('cart',saveCart)

}

const addLocalStores =id=>{
const cart = getLocalStores()
cart.push(id)
saveLocalStores(cart)
}
export default (addLocalStores,getLocalStores)
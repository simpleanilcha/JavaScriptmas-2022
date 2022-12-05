import products from "./data.js";

/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

function getSaleItems(data){
    let shoppingCart = data.filter(item => item.type === 'sweet').map(sweet => ({item:sweet.item, price:sweet.price}))
    return shoppingCart

    // method 2
    // return data.filter(item => item.type === 'sweet').map(sweet => {
    //   delete sweet.type
    //   return sweet
    // })

    // deconstruct method
    // return data.filter(({type}) => type === 'sweet').map(({item, price}) => ({item, price}))

    // reduce method
    // const shoppingCart = data.reduce((acc, current) => {
    //   current.type == "sweet" ? delete current.type && acc.push(current) : null;
    //   return acc;
    // }, [])
    // return shoppingCart.length ? shoppingCart : "Empty Input";
};

console.log(getSaleItems(products))

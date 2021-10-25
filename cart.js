///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const summedPrice = cart.reduce(function(acc,curr ){
    return acc + curr.price
} ,0)
console.log(summedPrice)
// const summedPrice = cart.reduce(/* CALLBACK HERE */)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax){
     return cartTotal * 1+ tax - couponValue
 }
calcFinalPrice()

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The four properties are name 'string', because you learn who youre referring to and will establish a good relationship with
 diet (vegan, kosher, halal)'string', this will allow you to meet their dietary preferences so they dont get offended or upset, causing you to lose business

  budget 'number' this may allow you to help them pick recommendations according to their pocket size
  , likesSpicy (bool) this will also helo you cater to their taste buds and specific tastes 

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObj = {
    name: 'Ayaan',
    diet: 'halal',
    budget: 20,
    likesSpicy: false
}

// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

const fromEuroToDollar= (amountEuros)=> amountEuros*1.2;

const fromDollarToYen= (amountDollar)=> amountDollar*1.2*127.9;

const fromYenToPound= (amountYen)=> (amountYen/127.9)*0.8;

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
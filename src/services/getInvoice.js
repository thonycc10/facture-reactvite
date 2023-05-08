import {Invoice} from "../data/invoice.js";

export const getInvoice  = () => {

    // manera 1 usando foreach
    /*let total = 0;
    Invoice.item.forEach(item => {
        total = total + item.price * item.amount;
    })*/

    // manera 2 mejor usando map
    const total = Invoice.item
        .map(({price, amount}) => price * amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    return {...Invoice, total};
}

import {useEffect, useState} from "react";

export const FormItemsView = ({handler}) => {

    const [formInvoiceItemsState, setFormInvoiceItemsState] = useState({
        product: '',
        price: '',
        amount: ''
    });

    const {product, price, amount} = formInvoiceItemsState;

    useEffect(() => {
        console.log('El formulario tuvo un cambio');
    }, [formInvoiceItemsState])

    const onChangeInput = ({target: {name, value}}) => {
        setFormInvoiceItemsState({
            ...formInvoiceItemsState,
            [ name ]: value
        });
    }

    const onChangeItemsSubmit = (event) => {
        event.preventDefault();

        if(product.trim().length <= 1 ||
            isNaN(amount.trim()) ||
            isNaN(price.trim()) ||
            amount.trim().length < 1 ||
            price.trim().length < 1) return;

        handler(formInvoiceItemsState);

        setFormInvoiceItemsState({
            product: '',
            price: '',
            amount: ''
        })
    };

    return (
        <>
            <form action="" className={"w-50"} onSubmit={onChangeItemsSubmit}>
                <input type="text"
                       name={"product"}
                       placeholder={"Prorduct"}
                       value={product}
                       onChange={onChangeInput}
                       className={"form-control m-3"}/>
                <input type="text"
                       name={"price"}
                       placeholder={"Price"}
                       value={price}
                       onChange={onChangeInput}
                       className={"form-control m-3"}/>
                <input type="text"
                       name={"amount"}
                       placeholder={"Amount"}
                       value={amount}
                       onChange={onChangeInput}
                       className={"form-control m-3"}/>
                <button type={"submit"} className={"btn btn-primary m-3"}>Nuevo Item</button>
            </form>
        </>
    )
}

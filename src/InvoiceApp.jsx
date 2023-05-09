import {getInvoice} from "./services/getInvoice.js";
import {InvoiceView} from "./components/InvoiceView.jsx";
import {ClientView} from "./components/ClientView.jsx";
import {CompanyView} from "./components/CompanyView.jsx";
import {ListItemView} from "./components/ListItemView.jsx";
import {TotalView} from "./components/TotalView.jsx";
import {useEffect, useState} from "react";

const invoiceInitial = {
    id: 0,
    name: '',
    client: {
        id: 0,
        name: ''
    },
    company: {
        id: 0,
        name: ''
    },
    item: []
}

export const InvoiceApp = () => {

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.item);
    }, []) // condicion de cuando se debe ejecutar la sesion ciclo de vida.

    const {id, name, client, company, total} = invoice;

    const [formInvoiceItemsState, setFormInvoiceItemsState] = useState({
        product: '',
        price: '',
        amount: ''
    });

    const {product, price, amount} = formInvoiceItemsState;

    const [counter, setCounter] = useState(4);

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
            amount.trim().length <= 1 ||
            price.trim().length <= 1) return;

        setItems([...items, {
            id: counter,
            name: product.trim(),
            price: parseInt(price.trim(), 10),
            amount: parseInt(amount.trim(), 10)
        }])
        setFormInvoiceItemsState({
            product: '',
            price: '',
            amount: ''
        })
        setCounter(counter + 1);
    };

    return (<>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo de Factura:
                    </div>
                    <div className="card-body">
                        <InvoiceView name={name} id={id}/>
                        <div className="row my-3">
                            <div className="col">
                                <ClientView name={client.name} id={client.id}/>
                            </div>
                            <div className="col">
                                <CompanyView name={company.name} id={company.id}/>
                            </div>
                        </div>
                        <ListItemView item={items}/>
                        <TotalView total={total}/>
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
                    </div>
                </div>
            </div>
        </>)
}

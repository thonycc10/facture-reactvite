import {calculateTotal, getInvoice} from "./services/getInvoice.js";
import {InvoiceView} from "./components/InvoiceView.jsx";
import {ClientView} from "./components/ClientView.jsx";
import {CompanyView} from "./components/CompanyView.jsx";
import {ListItemView} from "./components/ListItemView.jsx";
import {TotalView} from "./components/TotalView.jsx";
import {useEffect, useState} from "react";
import {FormItemsView} from "./components/FormItemsView.jsx";

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
    const [total, setTotal] = useState(0);

    const [counter, setCounter] = useState(4);

    const [invoice, setInvoice] = useState(invoiceInitial);

    const [items, setItems] = useState([]);




    const {id, name, client, company} = invoice;

    useEffect(() => {
        const data = getInvoice();
        console.log(data);
        setInvoice(data);
        setItems(data.item);
    }, []) // condicion de cuando se debe ejecutar la sesion ciclo de vida.



    useEffect(() => {
        console.log('El item tuvo un cambio');
        setTotal(calculateTotal(items));
    }, [items])

    const handlerAddItems = ({product, price, amount}) => {

        setItems([...items, {
            id: counter,
            name: product.trim(),
            price: parseInt(price.trim(), 10),
            amount: parseInt(amount.trim(), 10)
        }])

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
                        <FormItemsView handler={handlerAddItems} />
                    </div>
                </div>
            </div>
        </>)
}

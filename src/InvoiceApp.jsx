import {getInvoice} from "./services/getInvoice.js";
import {InvoiceView} from "./components/InvoiceView.jsx";
import {ClientView} from "./components/ClientView.jsx";
import {CompanyView} from "./components/CompanyView.jsx";
import {ListItemView} from "./components/ListItemView.jsx";
import {TotalView} from "./components/TotalView.jsx";
import {useState} from "react";

export const InvoiceApp = () => {

    const {id, name, client, company, item: itemsInitial, total} = getInvoice();

    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState('');
    const [amoutValue, setAmountValue] = useState('');

    const [items, setItems] = useState(itemsInitial);

    const [counter, setCounter] = useState(4);

    const onChangeProduct = ({target}) => setProductValue(target.value);
    const onChangePrice = ({target}) => setPriceValue(target.value);
    const onChangeAmount = ({target}) => setAmountValue(target.value);
    const onChangeItemsSubmit = (event) => {
        event.preventDefault();

        if(productValue.trim().length <= 1 ||
            isNaN(amoutValue.trim()) ||
            isNaN(priceValue.trim()) ||
            amoutValue.trim().length <= 1 ||
            priceValue.trim().length <= 1) return;

        setItems([...items, {
            id: counter,
            name: productValue.trim(),
            price: parseInt(priceValue.trim(), 10),
            amount: parseInt(amoutValue.trim(), 10)
        }])

        setProductValue('');
        setPriceValue('');
        setAmountValue('');
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
                                   name={"name"}
                                   placeholder={"Prorduct"}
                                   value={productValue}
                                   onChange={onChangeProduct}
                                   className={"form-control m-3"}/>
                            <input type="text"
                                   name={"price"}
                                   placeholder={"Price"}
                                   value={priceValue}
                                   onChange={onChangePrice}
                                   className={"form-control m-3"}/>
                            <input type="text"
                                   name={"amount"}
                                   placeholder={"Amount"}
                                   value={amoutValue}
                                   onChange={onChangeAmount}
                                   className={"form-control m-3"}/>
                            <button type={"submit"} className={"btn btn-primary m-3"}>Nuevo Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </>)
}

import {getInvoice} from "../services/getInvoice.js";
import {InvoiceView} from "./InvoiceView.jsx";
import {ClientView} from "./ClientView.jsx";
import {CompanyView} from "./CompanyView.jsx";
import {ListItemView} from "./ListItemView.jsx";

export const InvoiceApp = () => {

    const {id, name, client, company, item} = getInvoice();

    return (
        <>
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
                        <ListItemView item={item}/>
                    </div>
                </div>
            </div>
        </>
    )
}

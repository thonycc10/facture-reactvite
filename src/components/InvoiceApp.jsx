import {getInvoice} from "../services/getInvoice.js";

export const InvoiceApp = () => {

    const invoce = getInvoice();

    return (
        <>
            <div className="container">
                <div className="card my-3">
                    <div className="card-header">
                        Ejemplo de Factura:
                    </div>
                    <div className="card-body">
                        <ul className={"list-group"}>
                            <li className={"list-group-item"}>Id: {invoce.id}</li>
                            <li className={"list-group-item"}>Name: {invoce.name}</li>
                        </ul>

                        <table className={'table table-striped table-hover'}>
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                invoce.item.map(({amount, name, id, price}) => (
                                    <tr key={id}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>{amount}</td>
                                        <td>{price}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

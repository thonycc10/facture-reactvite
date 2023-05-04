import * as PropTypes from "prop-types";
import {RowItemView} from "./RowItemView.jsx";

export const ListItemView = ({item}) => {
    return (
        <>
            <h4>List items</h4>
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
                    item.map(({amount, name, id, price}) => (
                        <RowItemView key={id} name={name} id={id} amount={amount} price={price}/>
                    ))
                }
                </tbody>
            </table>
        </>
    )
}

ListItemView.propTypes = {item: PropTypes.array}

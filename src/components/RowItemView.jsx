import * as PropTypes from "prop-types";

export const RowItemView = ({id, name, amount, price, handlerDetleItem}) => {
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{price}</td>
                    <td><button className={"btn btn-danger"} onClick={() => handlerDetleItem(id)}>remove</button></td>
                </tr>
            </>
        )
}

RowItemView.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    handlerDetleItem: PropTypes.any
}

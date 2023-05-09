import * as PropTypes from "prop-types";

export const RowItemView = ({id, name, amount, price}) => {
        return (
            <>
                <tr>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{price}</td>
                </tr>
            </>
        )
}

RowItemView.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
    amount: PropTypes.any,
    price: PropTypes.any
}

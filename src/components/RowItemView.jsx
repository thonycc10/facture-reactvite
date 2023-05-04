import * as PropTypes from "prop-types";
import {Component} from "react";

export class RowItemView extends Component {
    render() {
        let {id, name, amount, price} = this.props;
        return (
            <>
                <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{amount}</td>
                    <td>{price}</td>
                </tr>
            </>
        )
    }
}

RowItemView.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
    amount: PropTypes.any,
    price: PropTypes.any
}

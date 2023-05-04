import * as PropTypes from "prop-types";
import {Component} from "react";

export class InvoiceView extends Component {
    render() {
        let {id, name} = this.props;
        return (
            <>
                <ul className={"list-group"}>
                    <li className={"list-group-item"}>Id: {id}</li>
                    <li className={"list-group-item"}>Name: {name}</li>
                </ul>
            </>
        )
    }
}

InvoiceView.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}

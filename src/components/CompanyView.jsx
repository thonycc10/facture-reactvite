import * as PropTypes from "prop-types";
import {Component} from "react";

export class CompanyView extends Component {
    render() {
        let {id, name} = this.props;
        return (
            <>
                <h3>Datos de la Empresa</h3>
                <ul className={"list-group"}>
                    <li className={"list-group-item active"}>Name: {name}</li>
                    <li className={"list-group-item"}>Id: {id}</li>
                </ul>
            </>
        )
    }
}

CompanyView.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}

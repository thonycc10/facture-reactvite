import * as PropTypes from "prop-types";

export const ClientView = ({id, name}) => {
    return (
        <>
            <h3>Datos del cliente</h3>
            <ul className={"list-group"}>
                <li className={"list-group-item active"}>Name: {name}</li>
                <li className={"list-group-item"}>Id: {id}</li>
            </ul>
        </>
    )
}

ClientView.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string
}

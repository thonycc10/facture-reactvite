import * as PropTypes from "prop-types";

export const TotalView = ({total}) => {
    return (
        <>
            <div className={"text-end"}>
                <span className="bage bg-success">
                    {total}
                </span>
            </div>
        </>
    )
}

TotalView.prototype = {
    total: PropTypes.number
}

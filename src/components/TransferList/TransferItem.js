import React from "react"
import PropTypes from 'prop-types'

function TransferItem({ item, onChange }) {
    return (
        <label className='transfer-item' data-selected={!!item.selected} data-checked={!!item.checked} data-testid={item.name}>
            <input type='checkbox' checked={!!item.checked} onChange={onChange} />
            <span>{item.name}</span>
        </label>
    )
}

TransferItem.propTypes = {
    item: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}

export default React.memo(TransferItem)

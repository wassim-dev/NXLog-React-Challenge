import PropTypes from 'prop-types'
import React from 'react'
import TransferItem from './TransferItem'

function TransferColumn({ list, onItemCheckedChange }) {
    return (
        <div className='transfer-column'>
            {list.map((item) => <TransferItem key={item.name} item={item} onChange={(e) => onItemCheckedChange(e.target.checked, item)} />)}
            {list.length ? null : <span className='transfer-column-empty'>The list is empty</span>}
        </div>
    )
}

TransferColumn.propTypes = {
    list: PropTypes.array.isRequired,
    onItemCheckedChange: PropTypes.func.isRequired
}

export default React.memo(TransferColumn)

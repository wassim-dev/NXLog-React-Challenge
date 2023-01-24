import React from 'react';
import PropTypes from 'prop-types'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'react-feather';
import useTransferList from './useTransferList.hook';
import './TransferList.scss';
import TransferColumn from './TransferColumn';

function TransferList({ list, onChange }) {
    const {
        list1,
        list2,
        list1CheckedList,
        moveAllToList1,
        moveSelectedToList1,
        list2CheckedList,
        moveAllToList2,
        moveSelectedToList2,
        onItem1CheckedChange,
        onItem2CheckedChange,
    } = useTransferList(list, onChange)

    return (
        <div className='transfer-list'>
            <TransferColumn list={list1} onItemCheckedChange={onItem1CheckedChange} />
            <div className='transfer-actions'>
                <button onClick={moveAllToList1} disabled={!list2.length} data-testid="<<"><ChevronsLeft /></button>
                <button onClick={moveSelectedToList1} disabled={!list2CheckedList.length} data-testid="<"><ChevronLeft /></button>
                <span />
                <button onClick={moveSelectedToList2} disabled={!list1CheckedList.length} data-testid=">"><ChevronRight /></button>
                <button onClick={moveAllToList2} disabled={!list1.length} data-testid=">>"><ChevronsRight /></button>
            </div>
            <TransferColumn list={list2} onItemCheckedChange={onItem2CheckedChange} />
        </div>
    )
}

TransferList.propTypes = {
    list: PropTypes.array.isRequired,
    onChange: PropTypes.func
}

TransferList.defaultProps = {
    list: [],
    onChange: undefined,
};

export default React.memo(TransferList)

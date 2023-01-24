import { useEffect, useState } from "react";

function useTransferList(_list, _onChange) {
    const [list, setList] = useState([]);

    // Update the list when the received "_list" prop changes.
    useEffect(() => {
        if (Array.isArray(_list)) {
            setList(_list);
        }
    }, [_list]);

    // Update state
    const updateList = () => {
        const newList = [...list];
        setList(newList);

        if (typeof _onChange === 'function') {
            _onChange(newList);
        }
    }

    const list1 = list.filter(item => !item.selected);
    const list2 = list.filter(item => item.selected);
    const list1CheckedList = list1.filter(item => item.checked);
    const list2CheckedList = list2.filter(item => item.checked);

    // Update the "selected" prop for each item in "array"
    const setSelectedPropForEachItem = (array, selected) => {
        array.forEach(item => {
            item.selected = selected;
            item.checked = false;

            // Move item to the end of the list
            list.push(list.splice(list.indexOf(item), 1)[0]);
        });
        updateList();
    }

    // Listen for changes to the check state of items in list1.
    const onItem1CheckedChange = (checked, item) => {
        item.checked = !!checked;
        updateList();
    }

    // Listen for changes to the check state of items in list2.
    const onItem2CheckedChange = (checked, item) => {
        item.checked = !!checked;
        updateList();
    }

    // Move all items of the list2 to list1
    const moveAllToList1 = () => {
        setSelectedPropForEachItem(list2, false);
    }

    // Move all items of the list1 to list2
    const moveAllToList2 = () => {
        setSelectedPropForEachItem(list1, true);
    }

    // Move selected items of the list2 to list1
    const moveSelectedToList1 = () => {
        setSelectedPropForEachItem(list2CheckedList, false);
    }

    // Move selected items of the list1 to list2
    const moveSelectedToList2 = () => {
        setSelectedPropForEachItem(list1CheckedList, true);
    }

    return {
        list1,
        list2,
        list1CheckedList,
        list2CheckedList,
        onItem1CheckedChange,
        onItem2CheckedChange,
        moveAllToList1,
        moveAllToList2,
        moveSelectedToList1,
        moveSelectedToList2,
    }
}

export default useTransferList;

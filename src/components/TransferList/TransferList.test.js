import { fireEvent, render, screen } from '@testing-library/react';
import TransferList from './TransferList';
import data from '../../data.json';

test('renders items in the first column', async () => {
    render(<TransferList list={JSON.parse(JSON.stringify(data))} />);
    data.forEach(item => {
        const itemElement = screen.getByTestId(item.name);
        expect(itemElement).toBeInTheDocument();
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
    })
});

test('Check items', async () => {
    render(<TransferList list={JSON.parse(JSON.stringify(data))} />);
    data.forEach((item) => {
        const itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
        fireEvent.click(itemElement);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'true');
    })
});

test('Select/Unselect items', async () => {
    render(<TransferList list={JSON.parse(JSON.stringify(data))} />);
    const selectBtn = screen.getByTestId('>');
    const unselectBtn = screen.getByTestId('<');
    data.forEach((item) => {
        let itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
        fireEvent.click(itemElement);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'true');
        fireEvent.click(selectBtn);
        itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'true');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
        fireEvent.click(itemElement);
        expect(itemElement).toHaveAttribute('data-selected', 'true');
        expect(itemElement).toHaveAttribute('data-checked', 'true');
        fireEvent.click(unselectBtn);
        itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
    })
});

test('Select/Unselect all items', async () => {
    render(<TransferList list={JSON.parse(JSON.stringify(data))} />);
    const selectAllBtn = screen.getByTestId('>>');
    const unselectAllBtn = screen.getByTestId('<<');
    data.forEach((item) => {
        let itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
    })
    fireEvent.click(selectAllBtn);
    data.forEach((item) => {
        let itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'true');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
    })
    fireEvent.click(unselectAllBtn);
    data.forEach((item) => {
        let itemElement = screen.getByTestId(item.name);
        expect(itemElement).toHaveAttribute('data-selected', 'false');
        expect(itemElement).toHaveAttribute('data-checked', 'false');
    })
});

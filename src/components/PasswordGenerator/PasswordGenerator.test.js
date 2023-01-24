import { fireEvent, render, screen } from '@testing-library/react';
import PasswordGenerator from './PasswordGenerator';

test('All elements in the dom', async () => {
    render(<PasswordGenerator />);
    expect(screen.getByTestId('password')).toBeInTheDocument();
    expect(screen.getByTestId('copy')).toBeInTheDocument();
    expect(screen.getByTestId('characterLength')).toBeInTheDocument();
    expect(screen.getByTestId('lowercase')).toBeInTheDocument();
    expect(screen.getByTestId('uppercase')).toBeInTheDocument();
    expect(screen.getByTestId('numbers')).toBeInTheDocument();
    expect(screen.getByTestId('symbols')).toBeInTheDocument();
    expect(screen.getByTestId('generate')).toBeInTheDocument();
});


test('Check/Uncheck options', async () => {
    render(<PasswordGenerator />);
    const lowercaseElm = screen.getByTestId('lowercase');
    const uppercaseElm = screen.getByTestId('uppercase');
    const numbersElm = screen.getByTestId('numbers');
    const symbolsElm = screen.getByTestId('symbols');
    expect(lowercaseElm).toBeChecked();
    expect(uppercaseElm).not.toBeChecked();
    expect(numbersElm).not.toBeChecked();
    expect(symbolsElm).not.toBeChecked();
    fireEvent.click(lowercaseElm);
    expect(lowercaseElm).toBeChecked();
    expect(uppercaseElm).not.toBeChecked();
    expect(numbersElm).not.toBeChecked();
    expect(symbolsElm).not.toBeChecked();
    fireEvent.click(uppercaseElm);
    expect(lowercaseElm).toBeChecked();
    expect(uppercaseElm).toBeChecked();
    expect(numbersElm).not.toBeChecked();
    expect(symbolsElm).not.toBeChecked();
    fireEvent.click(lowercaseElm);
    expect(lowercaseElm).not.toBeChecked();
    expect(uppercaseElm).toBeChecked();
    expect(numbersElm).not.toBeChecked();
    expect(symbolsElm).not.toBeChecked();
});

test('Generate button', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const generateElm = screen.getByTestId('generate');
    expect(passwordElm.value).toBe('');
    fireEvent.click(generateElm);
    expect(passwordElm.value.length).toBeGreaterThanOrEqual(5);
});

test('Lowercase option', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const lowercaseElm = screen.getByTestId('lowercase');
    const uppercaseElm = screen.getByTestId('uppercase');
    const generateElm = screen.getByTestId('generate');
    expect(lowercaseElm).toBeChecked();
    expect(uppercaseElm).not.toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/^[a-z]+$/);
    fireEvent.click(uppercaseElm);
    fireEvent.click(lowercaseElm);
    expect(lowercaseElm).not.toBeChecked();
    expect(uppercaseElm).toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/^[^a-z]+$/);
});

test('Uppercase option', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const uppercaseElm = screen.getByTestId('uppercase');
    const generateElm = screen.getByTestId('generate');
    expect(uppercaseElm).not.toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/^[^A-Z]+$/);
    fireEvent.click(uppercaseElm);
    expect(uppercaseElm).toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/[A-Z]+/);
});

test('Numbers option', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const numbersElm = screen.getByTestId('numbers');
    const generateElm = screen.getByTestId('generate');
    expect(numbersElm).not.toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/^[^0-9]+$/);
    fireEvent.click(numbersElm);
    expect(numbersElm).toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value).toMatch(/[0-9]+/);
});

test('Symbols option', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const symbolsElm = screen.getByTestId('symbols');
    const generateElm = screen.getByTestId('generate');
    const SYMBOLS = `~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`;
    expect(symbolsElm).not.toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value.split('').find(s => SYMBOLS.includes(s))).toBeUndefined()
    fireEvent.click(symbolsElm);
    expect(symbolsElm).toBeChecked();
    fireEvent.click(generateElm);
    expect(passwordElm.value.split('').find(s => SYMBOLS.includes(s))).not.toBeUndefined()
});

test('Character length', async () => {
    render(<PasswordGenerator />);
    const passwordElm = screen.getByTestId('password');
    const characterLengthElm = screen.getByTestId('characterLength');
    const generateElm = screen.getByTestId('generate');
    fireEvent.click(generateElm);
    expect(passwordElm.value.length).toBe(parseInt(characterLengthElm.value));
    fireEvent.change(characterLengthElm, { target: { value: 20 } })
    fireEvent.click(generateElm);
    expect(passwordElm.value.length).toBe(20);
    fireEvent.change(characterLengthElm, { target: { value: 30 } })
    fireEvent.click(generateElm);
    expect(passwordElm.value.length).toBe(30);
});

import usePasswordGenerator from './usePasswordGenerator.hook';
import { Copy } from 'react-feather'
import './PasswordGenerator.scss'

function PasswordGenerator() {
    const { bindCheckBox, bindCharacterLength, characterLength, generate, copy, password } = usePasswordGenerator();

    return (
        <div className='password-generator'>
            <div className='password-generator-input'>
                <input value={password} readOnly data-testid="password" />
                <button onClick={copy} data-testid="copy"><Copy /></button>
            </div>
            <label>Character length {characterLength} <input type="range" min={5} max={50} {...bindCharacterLength()} data-testid="characterLength" /></label>
            <label><input type="checkbox" data-testid="lowercase" {...bindCheckBox('lowercase')} /> Include Lowercase</label>
            <label><input type="checkbox" data-testid="uppercase" {...bindCheckBox('uppercase')} /> Include Uppercase</label>
            <label><input type="checkbox" data-testid="numbers" {...bindCheckBox('numbers')} /> Include Numbers</label>
            <label><input type="checkbox" data-testid="symbols" {...bindCheckBox('symbols')} /> Include Symbols</label>
            <button onClick={generate} data-testid="generate">Generate</button>
        </div>
    )
}

export default PasswordGenerator

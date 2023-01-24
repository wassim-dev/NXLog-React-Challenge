import { useState } from "react";

function usePasswordGenerator() {
    const [password, setPassword] = useState('');
    const [characterLength, setCharacterLength] = useState(10);
    const [state, setState] = useState({
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false,
    });

    // Function to bind the state attribute to the checkbox input
    const bindCheckBox = (name) => {
        return {
            checked: state[name],
            onChange: (e) => {
                // select checked options
                const selectedOptions = Object
                    .entries(state)
                    .filter(([, value]) => value)
                    .map(([key]) => key)

                // Ignore update if it is the only selected option.
                if (selectedOptions.length === 1 && selectedOptions.includes(name) && !e.target.checked) {
                    return;
                }
                setState(_state => ({ ..._state, [name]: e.target.checked }))
            }
        }
    }

    // Function to bind the characterLength to the character length input
    const bindCharacterLength = () => {
        return {
            value: characterLength,
            onChange: (e) => setCharacterLength(parseInt(e.target.value))
        }
    }

    // Function to generate a password of a certain length using characters from the charList.
    function generateRandomString(length, charList) {
        let result = "";
        for (let i = 0; i < length; i++) {
            result += charList[Math.floor(Math.random() * charList.length)];
        }
        return result;
    }

    // Function to randomly reorder the characters in a string.
    function shuffle(str) {
        let a = str.split(""),
            n = a.length;

        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        return a.join("");
    }

    // Function to generate a password.
    const generate = () => {
        let pass = '';
        const charList = Object
            .entries(state)
            .filter(([, value]) => value)
            .map(([key]) => {
                switch (key) {
                    case 'lowercase':
                        return 'abcdefghijklmnopqrstuvwxyz'
                    case 'uppercase':
                        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
                    case 'numbers':
                        return '0123456789'
                    case 'symbols':
                        return `~\`!@#$%^&*()_-+={[}]|\\:;"'<,>.?/`
                    default:
                        return '';
                }
            })
            .map(str => {
                pass += generateRandomString(1, str);
                return str;
            })
            .join('')
        pass += generateRandomString(characterLength - pass.length, charList);
        setPassword(shuffle(pass));
    }

    // Function to copy the generated password to the clipboard.
    const copy = () => {
        navigator.clipboard.writeText(password);
    }

    return { bindCheckBox, bindCharacterLength, characterLength, generate, copy, password };
}

export default usePasswordGenerator;

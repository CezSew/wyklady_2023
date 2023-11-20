import {useEffect, useState} from "react";

const isPalindrome = (value) => value.length > 1 && value.split('').reverse().join('').toLowerCase() === value.toLowerCase();

const StateAndEvents = () => {
    const [value, setValue] = useState('');

    const handleChangeInputValue = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <p className={`code-box`}>
                {`Utwórz kontrolowany input, który na wpisanie wartości automatycznie sprawdzi, czy wartość jest palindromem i wyświetli informację`}
            </p>
            <main>
                <span>
                    {isPalindrome(value) ? 'TAK' : 'NIE'}
                    {/* Tutaj wyświetl info */}
                </span><br/>
                <input role={'input'} onChange={handleChangeInputValue} value={value}/>
            </main>
        </div>
    );
};

export default StateAndEvents;

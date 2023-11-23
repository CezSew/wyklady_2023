import {useEffect, useState} from "react";

const isPalindrome = (value) => value.length > 1 && value.split('').reverse().join('').toLowerCase() === value.toLowerCase();

const StateAndEvents = () => {
    const handleChangeInputValue = () => {};

    return (
        <div>
            <p className={`code-box`}>
                {`Utwórz kontrolowany input, który na wpisanie wartości automatycznie sprawdzi, czy wartość jest palindromem i wyświetli informację`}
            </p>
            <main>
                <span>
                    {/* Tutaj wyświetl info */}
                </span><br/>
                <input role={'input'}/>
            </main>
        </div>
    );
};

export default StateAndEvents;

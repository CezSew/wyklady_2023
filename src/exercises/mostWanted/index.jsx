const MostWanted = () => {
    return (
        <>
            <h1>{`Wyszukwiarka danych FBI`}</h1>
            <p>
                {`1. Dodaj odpytanie API `}
                <a href={`https://www.fbi.gov/wanted/api`}>{`https://www.fbi.gov/wanted/api`}</a>
                {` do stworzenia zapytania o listę poszukiwanych`}
            </p>
            <div className={`code-box`}>
                <span>{`Należy wykorzystać endpoint https://api.fbi.gov/@wanted`}</span>
            </div>
            <p>
                {`2. Wyświetl dane poszukiwanych`}
            </p>
            <div className={`code-box`}>
                <span>{`Wyświetl zdjęcie, imię i nazwisko, płeć oraz wiek poszukiwanego`}</span>
            </div>
            <p>
                {`3. Dodaj paginację`}
            </p>
            <div className={`code-box`}>
                <span>{`Należy dodać stan trzymający obecny numer strony. Potrzebne będą przyciski poprzednia/następna strona, a także informacja o obecnej stronie. Ignorujemy obsługę paginacji w URLu.`}</span><br/><br/>
                <span>{`Paginację obsługujemy poprzez odpytanie z argumentem &page={obecna strona}`}</span>
            </div>
            <p>
                {`4. Zmień ilość elementów paginacji na 300 i dokonaj optymalizacji`}
            </p>
            <div className={`code-box`}>
                <span>{`Większe listy mogą powodować znaczne spadki wydajności przy renderze, a także obciążają pamięć przeglądarki trzymając w DOM dużą ilość węzłów.`}</span><br/><br/>
                <span>{`W takiej sytuacji można użyć wirtualizacji posiłkując się gotowymi rozwiązaniami w postaci react-visibility-sensor lub react-window.`}</span>
            </div>
        </>
    );
}

export default MostWanted;

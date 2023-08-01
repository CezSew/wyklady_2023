import { useEffect, useState } from 'react';

const ReconciliationExample = () => {
    const [controlNumber, setControlNumber] = useState(1);

    const toggleState = () => {
        setControlNumber(prevNumber => prevNumber === 1 ? 0 : 1)
    };

    return (
        <main>
            <p>
                {`Włącz konsolę i obserwuj, co się stanie po zmianie stanu.`}<br/>
            </p>
            <button onClick={toggleState}>
                Zmień stan rodzica
            </button><br/>
            <div>
                <Text /><br/>
            </div>

            {controlNumber === 1 ? (
                <main>
                    <Text2 /><br/>
                </main>
            ) : (
                <div>
                    <Text2 /><br/>
                </div>
            )}

            {controlNumber === 1 ? (
                <div className={`${controlNumber}`}>
                    <Text3 /><br/>
                </div>
            ) : (
                <div>
                    <Text3 /><br/>
                </div>
            )}

        </main>
    );
};

const Text = () => {
    useEffect(() => {
        console.log('Text został zamontowany');

        return () => {
            console.log('Text został odmontowany');
        }
    }, []);

    return <p>{`-Ten tekst będzie tylko rerenderowany`}</p>;
}

const Text2 = () => {
    useEffect(() => {
        console.log('Text2 został zamontowany');

        return () => {
            console.log('Text2 został odmontowany');
        }
    }, []);

    return <p>{`-Ten tekst zostanie odmontowany`}</p>;
}

const Text3 = () => {
    useEffect(() => {
        console.log('Text3 został zamontowany');

        return () => {
            console.log('Text3 został odmontowany');
        }
    }, []);

    return <p>{`-Ten tekst będzie tylko rerenderowany`}</p>;
}

export default ReconciliationExample;

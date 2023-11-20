import {useEffect, useRef, useState} from "react";

const Hooks = () => {
    const [counter, setCounter] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        console.log(ref.current);
    }, []);

    useEffect(() => {
        document.title = `You clicked ${counter} times`;
        console.log('update!');
    });

    return (
        <div ref={ref}>
            <button onClick={() => setCounter(counter + 1)}>
                {counter}
            </button>
        </div>
    );
};

const withAdditionalState = (Component) => () => {
    const [state, setState] = useState(0);

    setTimeout(() => {
        setState(state + 1);
    }, 3000);

    useEffect(() => {
        console.log(state);
    }, [state]);

    return <Component />
}

export default withAdditionalState(Hooks);

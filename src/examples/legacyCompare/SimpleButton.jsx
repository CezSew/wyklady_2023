import withDescription from './withDescription';

const Button = () => (
    <button onClick={() => alert('kliknięto')}>
        {`Kliknij mnie`}
    </button>
);

export default withDescription(Button);

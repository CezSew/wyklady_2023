const withDescription = (Component) => () => (
    <div>
        <div className={`code-box`}>
            <p>
                {`W pliku vanilla.js znajduje się odpowiednik napisany w czystym JSie`}
            </p>
        </div>

        <Component />
    </div>
);

export default withDescription;

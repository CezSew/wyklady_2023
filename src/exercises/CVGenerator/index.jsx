import './index.css';

const CVGenerator = () => {
    return (
        <div className={'cv'}>
            <aside className={'cv__contact-data'}>
                <img
                    className={'cv__avatar'}
                    alt={'avatar'}
                    src={'https://randomuser.me/api/portraits/men/75.jpg'}
                />
            </aside>
            <main className={'cv__main'}>
                <h1 className={'cv__name'}>
                    {'Robert '}{'Makłowicz'}
                </h1>

                <hr className={'cv__break-line'} />

                <h2 className={'cv__section-title'}>
                    {`Skills`}
                </h2>

                {['JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust'].map(skill => (
                    <span className={'cv__skill'}>{skill}</span>
                ))}

                <hr className={'cv__break-line'} />

                <h2 className={'cv__section-title'}>
                    {`Schools`}
                </h2>

                <p className={'cv_school'}>
                    {`Politechnika Gdańska`}
                </p>
                <span className={'cv__school-subject'}>
                    {`Nanotechnologia`}
                </span>

                <hr className={'cv__break-line'} />

                <h2 className={'cv__section-title'}>
                    {`Hobbies`}
                </h2>

                {['tresowanie świnek morskich', 'jedzenie na czas', 'rzut oślim kopytem'].map(hobby => (
                    <span className={'cv__hobby'}>{hobby}</span>
                ))}

            </main>
        </div>
    );
};

export default CVGenerator;

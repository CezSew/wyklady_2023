import './index.css';

const CVGenerator = () => {
    return (
        <div className={'cv'}>
            <aside className={'cv__contact-data'}>
                <div className={'cv__avatar-container'}>
                    <img
                        className={'cv__avatar'}
                        alt={'avatar'}
                        src={'https://robohash.org/dolorererumdoloribus.png?size=300x300&set=set1'}
                    />
                </div>
                <h1 className={'cv__name-container'}>
                    <span className={'cv__first-name'}>
                        {'Robert'}
                    </span>
                    <span className={'cv__last-name'}>
                        {'Makłowicz'}
                    </span>
                </h1>
            </aside>
            <main className={'cv__main'}>
                <section className={`cv__section`}>
                    <h2 className={'cv__section-title'}>
                        {`About`}
                    </h2>

                    <p className={'cv__paragraph'}>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem. Aenean consectetur dapibus felis, id suscipit lorem rhoncus eu. Cras lacinia nulla quis odio pellentesque ornare. Sed ornare urna nunc, a facilisis tellus efficitur sed. In maximus porttitor orci ac aliquam. Mauris interdum fermentum lacus sit amet condimentum. Proin vel urna ac eros euismod suscipit.`}
                    </p>
                </section>

                <section className={`cv__section`}>
                    <h2 className={'cv__section-title'}>
                        {`Skills`}
                    </h2>

                    <div className={`cv__pills-container`}>
                        {['JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust'].map(skill => (
                            <span className={'cv__pill'}>{skill}</span>
                        ))}
                    </div>
                </section>

                <section className={`cv__section`}>
                    <h2 className={'cv__section-title'}>
                        {`Experience`}
                    </h2>
                    <p className={'cv__subject-name'}>
                        {`Transfer Multisort Elektronik`}
                    </p>
                    <p className={'cv__subject-desc'}>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.`}
                    </p> <p className={'cv__subject-desc'}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.`}
                </p>
                </section>

                <section className={`cv__section`}>
                    <h2 className={'cv__section-title'}>
                        {`Education`}
                    </h2>

                    <p className={'cv__subject-name'}>
                        {`Żłobek imienia lecha kaczyńskiego`}
                    </p>
                    <p className={'cv__subject-desc'}>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.`}
                    </p>
                    <p className={'cv__subject-name'}>
                        {`Politechnika Gdańska`}
                    </p>
                    <p className={'cv__subject-desc'}>
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.`}
                    </p>
                </section>

                <section className={`cv__section`}>
                    <h2 className={'cv__section-title'}>
                        {`Hobbies`}
                    </h2>

                    <div className={`cv__pills-container`}>
                        {['JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust','JS', 'TS', 'Diglet', 'Czarizard', 'Java', 'Rust'].map(skill => (
                            <span className={'cv__pill'}>{skill}</span>
                        ))}
                    </div>
                </section>
                {/*<h2 className={'cv__section-title'}>*/}
                {/*    {`Hobbies`}*/}
                {/*</h2>*/}

                {/*<hr className={'cv__break-line'} />*/}

                {/*{['tresowanie świnek morskich', 'jedzenie na czas', 'rzut oślim kopytem'].map(hobby => (*/}
                {/*    <span className={'cv__hobby'}>{hobby}</span>*/}
                {/*))}*/}
                <p className={'cv__subject-desc'}>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.`}
                </p>
            </main>
        </div>
    );
};

export default CVGenerator;

const initialData = {
    image: 'https://robohash.org/dolorererumdoloribus.png?size=300x300&set=set1',
    name: {
        firstName: 'Robert',
        lastName: 'Makłowicz'
    },
    sections: [
        {
            title: 'About',
            content: {
                type: 'text',
                value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem. Aenean consectetur dapibus felis, id suscipit lorem rhoncus eu. Cras lacinia nulla quis odio pellentesque ornare. Sed ornare urna nunc, a facilisis tellus efficitur sed. In maximus porttitor orci ac aliquam. Mauris interdum fermentum lacus sit amet condimentum. Proin vel urna ac eros euismod suscipit.'
            }
        },
        {
            title: 'Skills',
            content: {
                type: 'pills',
                value: ['JS', 'TS', 'Diglet', 'Czarizard', 'AWS', 'SLU', 'Rust', 'Java', 'Pikachu', 'JEST', 'SQL', 'PHP', 'Mobx', 'Mop']
            }
        },
        {
            title: 'EXPERIENCE',
            content: {
                type: 'titleWithDescription',
                value: {
                    title: 'TRANSFER MULTISORT ELEKTRONIK',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu ante vestibulum, euismod felis vitae, scelerisque lorem.'
                }
            }
        }
    ]
};

export default initialData;
import {fireEvent, render, screen} from '@testing-library/react';
import UserList from "./UserList";

describe('Exercise- Lists and keys', () => {
    it('renders list of 4 elements', () => {
        const { container } = render(<UserList />);
        const li = container.querySelectorAll('li')

        expect(li.length).toEqual(4);
    })

    it('plus buttons add points', () => {
        const { container } = render(<UserList />);
        const plus = container.querySelector('button');
        const textContent = container.querySelector('.text-content');

        fireEvent.click(plus);
        fireEvent.click(plus);

        expect(textContent).toHaveTextContent('John Doe 2');
    })

    it('sorts maintaining points count', () => {
        const { container } = render(<UserList />);
        const plus = container.querySelector('button');
        let firstElementTextContent = container.querySelector('.text-content');
        const sortButton = container.querySelector('.sort');

        fireEvent.click(plus);
        fireEvent.click(plus);
        fireEvent.click(plus);

        expect(firstElementTextContent).toHaveTextContent('John Doe 3');

        fireEvent.click(sortButton);

        firstElementTextContent = container.querySelector('.text-content');
        expect(firstElementTextContent).toHaveTextContent('Roberto Carlos 0');
    })
});

import Task2 from './index';
import { fireEvent, render, screen } from '@testing-library/react';

describe('First task- JSX', () => {
    it('renders span with specified text and class', () => {
        render(<Task2 />);

        const button = screen.getByText('Wciśnij mnie!');

        expect(button).toBeInTheDocument();
        expect(screen.queryByText('Testowy tekst')).toBeNull();

        fireEvent.click(button);

        expect(screen.queryByText('Testowy tekst')).toBeInTheDocument();
    })
});

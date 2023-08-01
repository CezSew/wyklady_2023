import Task1 from './index';
import { render, screen } from '@testing-library/react';

describe('First task- JSX', () => {
    it('renders span with specified text and class', () => {
        render(<Task1 />);

        const span = screen.getByText('Testowy tekst');

        expect(span).toBeInTheDocument();
        expect(span.classList[0]).toBe('klasa-testowa');
    })
});

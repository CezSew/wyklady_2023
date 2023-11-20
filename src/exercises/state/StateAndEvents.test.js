import {fireEvent, render, screen} from "@testing-library/react";
import StateAndEvents from "./StateAndEvents";
import userEvent from "@testing-library/user-event";
import {act} from "react-dom/test-utils";

describe('Exercise- State and events', () => {
    it('Renders an input', () => {
        render(<StateAndEvents />);
        const input = screen.getByRole('input');
        expect(input).toBeInTheDocument();
    })

    it('Displays information isPalindrome', () =>{
        const { container } = render(<StateAndEvents />);
        const info = container.querySelector('span');
        expect(info).toBeInTheDocument();
    })

    it('Correctly detects typed palindrome', () => {
        const { container } = render(<StateAndEvents />);
        const info = container.querySelector('span');
        const input = screen.getByRole('input');

        act(() => {
            userEvent.type(input, 'anna');
            expect(info).toHaveTextContent('TAK');
        });

        act(() => {
            userEvent.type(input, 'Anna');
            expect(info).toHaveTextContent('TAK');
        });

        act(() => {
            userEvent.type(input, 'ania');
            expect(info).toHaveTextContent('NIE');
        });
    })
})
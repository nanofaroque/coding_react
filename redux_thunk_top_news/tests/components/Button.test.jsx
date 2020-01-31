import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import {Button} from "../../src/components/Button";
import '@testing-library/jest-dom/extend-expect'

test('test render without issue', () => {
    render(<Button users={{}}/>);
    expect(screen.getByTestId('button_id')).toBeInTheDocument()
});
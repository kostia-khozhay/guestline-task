import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Counter } from './Counter';

describe('Counter', () => {
  test('should handle correctly plus click', () => {
    const onChange = jest.fn();
    render(<Counter onChange={onChange} label='Test' value={1} />);

    fireEvent.click(screen.getByText('+'));
    expect(onChange).toBeCalledWith(2);
  });

  test('should handle correctly minus click', () => {
    const onChange = jest.fn();
    render(<Counter onChange={onChange} label='Test' value={5} />);

    fireEvent.click(screen.getByText('-'));
    expect(onChange).toBeCalledWith(4);
  });

  test('should not allow to decrease value less than minVal', () => {
    const onChange = jest.fn();
    render(<Counter onChange={onChange} label='Test' minVal={3} value={3} />);

    expect(screen.getByText('-')).toBeDisabled();
    expect(screen.getByText('+')).toBeEnabled();

    fireEvent.click(screen.getByText('-'));
    expect(onChange).not.toBeCalled();
  });
});

import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Indicator from '../components/Form/Strength/Indicator/Indicator';

describe('Password', () => {
  it('display the correct number of filled box', () => {
    render(<Indicator strength={3} />);

    const filled = screen.getAllByTestId('indicator_box-active');

    expect(filled.length).toEqual(3);
  });
});

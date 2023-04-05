import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Password from '../components/Password/Password';

describe('Password', () => {
  const password = 'test';
  it('display the password passed as prop', () => {
    render(<Password password={password} />);

    expect(screen.getByText(password)).toBeInTheDocument();
  });
});

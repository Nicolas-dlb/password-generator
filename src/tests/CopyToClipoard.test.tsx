import { describe, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastContainer, toast } from 'react-toastify';
import { ReactNode } from 'react';
import CopyToClipboard from '../components/Password/CopyToClipboard/CopyToClipboard';

describe('CopyToClipboard', () => {
  Object.assign(navigator, {
    clipboard: {
      writeText: () => {},
    },
  });

  const valueToCopy = 'test';

  const renderWithToastify = (component: ReactNode) => {
    return render(
      <div>
        <ToastContainer />
        {component}
      </div>
    );
  };
  it('should copy to clipboard the value passed as prop onClick', async () => {
    vi.spyOn(navigator.clipboard, 'writeText');

    render(<CopyToClipboard valueToCopy={valueToCopy} />);
    const button = screen.getByRole('button');

    fireEvent.click(button);

    await waitFor(() =>
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(valueToCopy)
    );
  });
  it('should display a success notification onClick', async () => {
    vi.spyOn(toast, 'success');

    renderWithToastify(<CopyToClipboard valueToCopy={valueToCopy} />);
    const button = screen.getByRole('button');

    userEvent.click(button);

    expect(await screen.findByText('Copied to clipboard')).toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Input } from './Input';

describe('Input', () => {
  it('associates the label with the input', () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('accepts typed text', async () => {
    render(<Input label="Name" />);
    const input = screen.getByLabelText('Name');
    await userEvent.type(input, 'Asha');
    expect(input).toHaveValue('Asha');
  });

  it('links hint text via aria-describedby', () => {
    render(<Input label="Username" hint="3 to 16 characters" />);
    const input = screen.getByLabelText('Username');
    const hint = screen.getByText('3 to 16 characters');
    expect(input.getAttribute('aria-describedby')).toContain(hint.id);
  });

  it('marks the field invalid and links the error message', () => {
    render(<Input label="Email" error="Enter a valid email address" />);
    const input = screen.getByLabelText('Email');
    expect(input).toHaveAttribute('aria-invalid', 'true');
    expect(input).toHaveAccessibleDescription(/Enter a valid email address/);
  });

  it('forwards refs', () => {
    const ref = { current: null as HTMLInputElement | null };
    render(<Input label="Ref test" ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it('has no axe violations', async () => {
    const { container } = render(<Input label="Email" hint="We never share it" error="Required" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});

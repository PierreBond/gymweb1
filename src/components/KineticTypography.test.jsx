import { render, screen } from '@testing-library/react';
import KineticTypography from './KineticTypography';

describe('KineticTypography', () => {
  it('renders the full text for screen readers', () => {
    render(<KineticTypography text="Hello World" />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('has sr-only span for accessibility', () => {
    render(<KineticTypography text="Accessible text" />);
    const srOnly = screen.getByText('Accessible text');
    expect(srOnly).toHaveClass('sr-only');
  });

  it('applies custom className', () => {
    const { container } = render(<KineticTypography text="Test" className="text-red-500" />);
    expect(container.firstChild).toHaveClass('text-red-500');
  });
});

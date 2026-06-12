import { render, screen, fireEvent } from '@testing-library/react';
import OptimizedImage from './OptimizedImage';

describe('OptimizedImage', () => {
  it('renders with primary src', () => {
    render(<OptimizedImage src="/test.webp" fallback="/test.jpg" alt="Test image" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.webp');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('falls back to fallback src on error', () => {
    render(<OptimizedImage src="/missing.webp" fallback="/fallback.jpg" alt="Test" />);
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', '/fallback.jpg');
  });

  it('does not re-fallback after first failure', () => {
    render(<OptimizedImage src="/a.webp" fallback="/b.jpg" alt="Test" />);
    const img = screen.getByRole('img');
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', '/b.jpg');
    fireEvent.error(img);
    expect(img).toHaveAttribute('src', '/b.jpg');
  });

  it('applies custom className', () => {
    render(<OptimizedImage src="/test.webp" fallback="/test.jpg" alt="Test" className="w-full h-auto" />);
    expect(screen.getByRole('img')).toHaveClass('w-full', 'h-auto');
  });
});

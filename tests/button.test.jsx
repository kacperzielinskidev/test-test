import { render, fireEvent } from '@testing-library/react';
import Button from '../src/components/button';

test('Button renders correctly and triggers onClick event', () => {
  const mockOnClick = () => {};

  const { getByText } = render(<Button onClick={mockOnClick}>Click me</Button>);

  const buttonElement = getByText('Click me');

  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
});

test('Button renders correctly with custom class', () => {
  const { container } = render(
    <Button className='custom-button-class'>Click me</Button>
  );

  const buttonElement = container.firstChild;
  expect(buttonElement).toHaveClass('custom-button-class');
});

test('Button renders correctly with aria-label attribute', () => {
  const { getByLabelText } = render(
    <Button ariaLabel='Custom aria label'>Click me</Button>
  );

  const buttonElement = getByLabelText('Custom aria label');
  expect(buttonElement).toBeInTheDocument();
});

test('Button renders correctly with href attribute', () => {
  const { getByRole } = render(
    <Button href='https://example.com'>Click me</Button>
  );

  const buttonElement = getByRole('link');
  expect(buttonElement).toHaveAttribute('href', 'https://example.com');
});


import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FormValidation from './formValidation';




test('renders initial values correctly', () => {
  render(<FormValidation />);

  const emailInput = screen.getByLabelText('Email Address');
  const passwordInput = screen.getByLabelText('Password');
  const hobbiesCheckboxes = screen.getAllByRole('checkbox');
  const genderRadios = screen.getAllByRole('radio');

  expect(emailInput.value).toBe('');
  expect(passwordInput.value).toBe('');
  expect(hobbiesCheckboxes.every(checkbox => !checkbox.checked)).toBe(true);
  expect(genderRadios.every(radio => !radio.checked)).toBe(true);
});

test('displays validation errors for invalid inputs', () => {
  render(<FormValidation />);

  fireEvent.blur(screen.getByLabelText('Email Address'));
  fireEvent.blur(screen.getByLabelText('Password'));

  const emailError = screen.getByText('Email is required');
  const passwordError = screen.getByText('Password is required');

  expect(emailError).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
});

// Additional tests:

test('handles form submission with valid data', () => {
  const handleSubmitMock = jest.fn();
  render(<FormValidation onSubmit={handleSubmitMock} />);

  const emailInput = screen.getByLabelText('Email Address');
  const passwordInput = screen.getByLabelText('Password');
  const hobbiesCheckbox = screen.getByRole('checkbox', { name: 'Cricket' });
  const genderRadio = screen.getByRole('radio', { name: 'Male' });
  const submitButton = screen.getByRole('button', { type: 'submit' });

  userEvent.type(emailInput, 'test@example.com');
  userEvent.type(passwordInput, 'password123');
  userEvent.click(hobbiesCheckbox);
  userEvent.click(genderRadio);
  userEvent.click(submitButton);

  expect(handleSubmitMock).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123',
    hobbies: ['Cricket'],
    gender: 'Male'
  });
});

test('displays validation errors for hobbies and gender', () => {
  render(<FormValidation />);

  fireEvent.click(screen.getByText('Submit'));

  const hobbiesError = screen.getByText('select at least one hobby.');
  const genderError = screen.getByText('select at least one option.');

  expect(hobbiesError).toBeInTheDocument();
  expect(genderError).toBeInTheDocument();
});

// ... more tests for specific scenarios and edge cases

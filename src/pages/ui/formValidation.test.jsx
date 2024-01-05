
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { expect, it, vi,   } from 'vitest';
import FormValidation from './formValidation';


it('renders initial values correctly', () => {
  render(<FormValidation />);

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const hobbiesCheckboxes = screen.getAllByRole('checkbox');
  const genderRadios = screen.getAllByRole('radio');

  expect(emailInput.value).toBe('');
  expect(passwordInput.value).toBe('');
  expect(hobbiesCheckboxes.every(checkbox => !checkbox.checked)).toBe(true);
  expect(genderRadios.every(radio => !radio.checked)).toBe(true);
});

it('displays validation errors for invalid inputs', async () => {
  render(<FormValidation />);
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');

  fireEvent.blur(emailInput)
  fireEvent.blur(passwordInput)

  const emailError = await waitFor(() => screen.getByText('Email is required'));
  const passwordError = await waitFor(() => screen.getByText('Password is required'));

  expect(emailError).toBeTruthy()
  expect(passwordError).toBeTruthy()
});

// Additional tests:

it('handles form submission with valid data', async () => {
  const handleSubmitMock = vi.fn();
  render(<FormValidation onSubmit={handleSubmitMock} />);

  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const hobbiesCheckbox = screen.getByRole('checkbox', { name: 'Cricket' });
  const genderRadio = screen.getByRole('radio', { name: 'Male' });
  const submitButton = screen.getByRole('button', { type: 'submit' });

  await waitFor(async () => {
    await fireEvent.input(emailInput, 'test@example.com');
    await fireEvent.input(passwordInput, 'password123');
    await fireEvent.click(hobbiesCheckbox);
    await fireEvent.click(genderRadio);
  })

  await waitFor(() => fireEvent.submit(submitButton))
  console.log("handle mock", handleSubmitMock.mock.results)
  await waitFor(() => {
    expect(handleSubmitMock).toEqual({
      email: 'test@example.com',
      password: 'password123',
      hobbies: ['Cricket'],
      gender: 'Male'
    })
  })
  
});

// it('displays validation errors for hobbies and gender', () => {
//   render(<FormValidation />);

//   userEvent.click(screen.getByText('Submit'));

//   const hobbiesError = screen.getByText('select at least one hobby.');
//   const genderError = screen.getByText('select at least one option.');

//   expect(hobbiesError).toBeInTheDocument();
//   expect(genderError).toBeInTheDocument();
// });

// ... more tests for specific scenarios and edge cases

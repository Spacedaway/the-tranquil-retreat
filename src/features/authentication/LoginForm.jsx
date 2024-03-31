import { useState } from 'react';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useLogin } from './useLogin';
import SpinnerMini from '../../ui/SpinnerMini';

function LoginForm() {
	const [email, setEmail] = useState('ekan@example.com');
	const [password, setPassword] = useState('pass0987');
	const { isLoading, login } = useLogin();

	function handleSubmit(e) {
		e.preventDefault();

		if (!email || !password) return;

		login({ email, password });
	}

	return (
		<Form onSubmit={handleSubmit}>
			<FormRow label='Email address' orientation='vertical'>
				<Input
					type='email'
					id='email'
					// This makes this form better for password managers
					autoComplete='username'
					value={email}
					disabled={isLoading}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</FormRow>
			<FormRow label='Password' orientation='vertical'>
				<Input
					type='password'
					id='password'
					autoComplete='current-password'
					value={password}
					disabled={isLoading}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</FormRow>
			<FormRow orientation='vertical'>
				<Button disabled={isLoading} size='large'>
					{!isLoading ? 'Login in' : <SpinnerMini />}
				</Button>
			</FormRow>
		</Form>
	);
}

export default LoginForm;

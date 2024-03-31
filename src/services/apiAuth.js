import supabase, { supabaseUrl } from './supabase';

const login = async ({ email, password }) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) throw new Error(error.message);

	return data;
};

const getCurrentUser = async () => {
	const { data: session } = await supabase.auth.getSession();

	if (!session.session) return null;

	const { data, error } = await supabase.auth.getUser();

	if (error) throw new Error(error.message);

	return data?.user;
};

const logout = async () => {
	const { error } = await supabase.auth.signOut();

	if (error) throw new Error(error.message);
};

const signUp = async ({ fullName, email, password }) => {
	const { data, error } = await supabase.auth.signUp({
		email,
		password,
		options: { data: { fullName, avatar: '' } },
	});

	if (error) throw new Error(error.message);

	return data;
};

const updateCurrentUser = async ({ password, fullName, avatar }) => {
	let updateData;
	if (password) updateData = { password };
	if (fullName) updateData = { data: { fullName } };

	const { data, error } = await supabase.auth.updateUser(updateData);

	if (error) throw new Error(error.message);
	if (!avatar) return data;

	const fileName = `avatar-${data.user.id}-${Math.random()}`;

	const { error: storageError } = await supabase.storage
		.from('avatars')
		.upload(fileName, avatar);

	if (storageError) throw new Error(storageError.message);

	const { data: updatedUser, error: error2 } = await supabase.auth.updateUser({
		data: {
			avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`,
		},
	});

	if (error2) throw new Error(error2.message);

	return updatedUser;
};

export { login, getCurrentUser, logout, signUp, updateCurrentUser };

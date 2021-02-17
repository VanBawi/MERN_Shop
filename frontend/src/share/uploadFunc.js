import axios from 'axios';

const uploadFile = async (token, file, email) => {
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	//if there is a token then add it to the header
	if (token) {
		config.headers['x-auth-token'] = token;
	}

	try {
		let accessToken = await axios.get('/api/products/getAccessToken', config);
		console.log('accessToken', accessToken);

		const drive_url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';
		let drive_request = {
			headers: {
				Authorization: 'Bearer ' + accessToken.data.access_token,
			},
		};

		// make file permission readable to all TODO: no need right now
		const uploadedFile = await axios.post(drive_url, file, drive_request);
		console.log('uploadedFile', uploadedFile);

		const permissionURL = `https://www.googleapis.com/drive/v3/files/fileId/permissions?fileId=${uploadedFile.data.id}`;
		const requestBody = {
			emailAddress: email,
			role: 'reader',
			type: 'user',
		};
		axios.post(permissionURL, requestBody, drive_request);

		return uploadedFile;
	} catch (err) {
		return err.message;
	}
};

export default uploadFile;

const express = require('express');
const app = express();

const mockData = [
	{name: 'mark'},
	{name: 'tony'}
];

app.get("/users", (req, res) => {
	res.json({
		success: true,
 	 	message: 'successfully got users. Nice!',
 	 	users: mockData
	});
});

app.listen(8000, () => {
	console.log('Server Started');
});

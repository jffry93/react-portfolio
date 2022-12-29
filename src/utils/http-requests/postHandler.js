// this function requires the endpoint & object and returns the response
// ex. postHandler('/api/user', user);

// ***IMPORTANT*** Must be awaited in order to get the response

const postHandler = async (endpoint, object) => {
	const result = await fetch(endpoint, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(object),
	});
	const response = await result.json();
	return response;
};

export default postHandler;

// HOW TO USE 🧠

// const callHandler = async () => {
//   try {
//     const response = await postHandler('/api/user', user);
//     setState(response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// callHandler();

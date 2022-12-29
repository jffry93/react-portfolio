// this function requires the endpoint & object and returns the response
// ex. patchHandler('/api/user', user);

// ***IMPORTANT*** Must be awaited in order to get the response

const patchHandler = async (endpoint, object) => {
	const result = await fetch(endpoint, {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(object),
	});
	const response = await result.json();
	return response;
};

export default patchHandler;

// HOW TO USE 🧠

// const callHandler = async () => {
//   try {
//     const response = await patchHandler('/api/user', user);
//     setState(response);
//   } catch (err) {
//     console.log(err);
//   }
// };
// callHandler();

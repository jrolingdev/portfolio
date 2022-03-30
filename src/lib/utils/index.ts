async function trycatch(promise: Promise<any>) {
	try {
		const data = await promise;
		return [data, null];
	} catch (error) {
		return [null, error];
	}
}

export { trycatch };

interface Meta {
	method: 'GET' | 'POST' | 'PUT' | 'DELETE';
	endpoint: string;
	limit: number;
	offset?: number;
	current_page?: number;
	last_page?: number;
	total?: number;
}

interface HTTPResponse<T = Record<string, never>> {
	success: 0 | 1;
	code: number;
	meta: Meta;
	data: T;
	message: string;
	duration: number;
}

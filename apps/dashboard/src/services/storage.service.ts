
export class StorageService {
	/**
	 * Checkout localstorage item 
	 * @param name 
	 * @returns boolean
	 */
	static checkItem(name: string): boolean {
		if (window.localStorage.getItem(name)) return true;

		return false;
	}
	/**
	 * Get item from localstorage 
	 * @param name 
	 * @returns 
	 */
	static getItem(name: string): any | false {
		const value = window.localStorage.getItem(name);

		if (!value) return false;
		
		return JSON.parse(value).data;
	}
	/**
	 * Set new item to localstorage
	 * @param name 
	 * @param value 
	 */
	static setItem(name: string, value: any): void {
		window.localStorage.setItem(name, JSON.stringify({ data: value }));
	}
	static removeItem(name: string): void {
		window.localStorage.removeItem(name);
	}
	/**
	 * Clear localstorage
	 */
	static clear(): void {
		window.localStorage.clear();
	}
}

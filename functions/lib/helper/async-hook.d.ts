export declare const asyncLocalStorageMiddleware: (req: Request, res: Response, next: () => void) => void;
export declare const setAsyncLocalStorageValue: (key: string, value: any) => void;
export declare const getAsyncLocalStorageValue: <T>(key: string) => T;

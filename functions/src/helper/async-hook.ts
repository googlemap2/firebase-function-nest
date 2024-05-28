import { AsyncLocalStorage } from 'async_hooks';

const asyncLocalStorage = new AsyncLocalStorage<Map<string, any>>();

export const asyncLocalStorageMiddleware = (
  req: Request,
  res: Response,
  next: () => void
) => {
  asyncLocalStorage.run(new Map(), () => {
    next();
  });
};

export const setAsyncLocalStorageValue = (key: string, value: any) => {
  const store = asyncLocalStorage.getStore();
  if (store) {
    store.set(key, value);
  }
};

export const getAsyncLocalStorageValue = <T>(key: string): T | undefined => {
  const store = asyncLocalStorage.getStore();
  return store ? store.get(key) : undefined;
};

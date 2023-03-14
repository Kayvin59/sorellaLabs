export const isProd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';
export const isLocal = !isProd && !isDev;

export const showLogger = isLocal ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false;


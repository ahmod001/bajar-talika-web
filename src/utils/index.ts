
export function env<T>(key: string, defaultValue: T) {
    return process.env[key] || defaultValue
}


export const appBaseUrl = () => {
    return env('NEXT_PUBLIC_APP_BASE_URL', 'http://localhost:3000')
}

export function env<T>(key: string, defaultValue: T) {
    return process.env[key] || defaultValue
}

export function env(key: string, defaultValue: boolean | number | string) {
    return process.env[key] || defaultValue
}
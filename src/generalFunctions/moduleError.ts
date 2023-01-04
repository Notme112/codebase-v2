export function moduleError(module: string, e: Error): void {
    console.error(`The module ${module} throws an error.`);
    console.error(e)
}
export function toLocalDateTimeString(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const offset = date.getTimezoneOffset() * 60000; // offset in ms
    const localISOTime = new Date(date.getTime() - offset)
        .toISOString()
        .slice(0, 16);
    return localISOTime;
}

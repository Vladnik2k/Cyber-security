export const getCurrentScript = (): HTMLScriptElement | null => {
    try {
        throw new Error();
    } catch (e) {
        const stack = (e as Error).stack;
        if (!stack) {
            return null;
        }

        const stackRegex = /(?:http[s]?:\/\/.*?\/|\/)[^:\n]+(?=(:\d+))/g;
        const scripts = document.getElementsByTagName('script') || [];
        const stackUrls = (stack.match(stackRegex) || []).filter(url => url);

        const findScript = Array.from(scripts).find(script => stackUrls.some(url => script.src && script.src === url));
        if (findScript) return findScript;
    }
    return null;
}

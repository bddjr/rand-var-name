const charCodeMap = new TextEncoder().encode('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$')

// if (charCodeMap.length !== 64) throw Error(`charCodeMap.length !== 64`);

function _rand(length: number, firstByte: number): Uint8Array<ArrayBuffer> {
    Number.isSafeInteger(length = Math.trunc(length)) || (length = 0)
    const b = new Uint8Array(length)
    b[0] = firstByte
    for (let i = 1; i < length;) {
        b[i++] = charCodeMap[Math.trunc(Math.random() * 64)]
    }
    return b
}

/**
 * Returns format "_XXXXXXXX"
 */
export function rand(length = 9): string {
    return new TextDecoder().decode(randBytes(length))
}

/**
 * Returns format "_XXXXXXXX"
 */
export function randBytes(length = 9): Uint8Array<ArrayBuffer> {
    return _rand(length, 95)
}

/**
 * Returns format "XXXXXXXX"
 */
export function randWithoutPrefix(length = 8): string {
    return new TextDecoder().decode(randBytesWithoutPrefix(length))
}

/**
 * Returns format "_XXXXXXXX"
 */
export function randBytesWithoutPrefix(length = 8): Uint8Array<ArrayBuffer> {
    return _rand(length, charCodeMap[10 + Math.trunc(Math.random() * 54)])
}

const randVarName = {
    rand,
    randBytes,
    randWithoutPrefix,
    randBytesWithoutPrefix
}

export default randVarName

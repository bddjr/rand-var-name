export const varNameAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$0123456789'

export interface RandVarNameOptions {
    length?: number
    prefix?: string
}

export function randVarName(options?: RandVarNameOptions): string {
    let out = ''
    if (options != null && options.prefix != null) {
        out = options.prefix
        if (typeof out != 'string') {
            throw TypeError("prefix must be a string");
        }
        if (out) {
            if (!varNameAlphabet.slice(0, 54).includes(out[0])) {
                throw SyntaxError("prefix must be a valid JS identifier");
            }
            for (let i = 1, l = out.length; i < l; i++) {
                if (!varNameAlphabet.includes(out[i])) {
                    throw SyntaxError("prefix must be a valid JS identifier");
                }
            }
        }
    }
    let len: number
    if (options != null && options.length != null) {
        len = options.length
        if (typeof len != 'number') {
            throw TypeError('length must be a number')
        }
        if (!Number.isSafeInteger(len)) {
            throw SyntaxError('length must be a safe integer');
        }
        if (len <= out.length) {
            throw SyntaxError('length must be greater than prefix length to ensure randomness');
        }
    } else {
        len = 8 + out.length
    }
    if (!out) {
        out = varNameAlphabet.charAt(Math.random() * 54)
    }
    for (let i = out.length; i < len; i++) {
        out += varNameAlphabet.charAt(Math.random() * 64)
    }
    return out
}

const unescape = string => (string + '==='.slice((string.length + 3) % 4)).replace(/-/g, '+').replace(/_/g, '/')
const escape = string => string.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')

export const encode = string => escape(Buffer.from(JSON.stringify(string), 'utf8').toString('base64'))
export const decode = string => JSON.parse(Buffer.from(unescape(string), 'base64').toString('utf8'))

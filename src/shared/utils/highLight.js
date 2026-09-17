const escapeHTML = (unsafeString) => {
    return unsafeString
        .replaceAll(/&/g, '&amp;')
        .replaceAll(/</g, '&lt;')
        .replaceAll(/>/g, '&gt;')
        .replaceAll(/"/g, '&quot;')
        .replaceAll(/'/g, '&#39;')
}

const escapeRegExp = (unsafeString) => {
    return unsafeString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export const highlightCaseInsensitive = (text, query) => {
    const queryFormatted = query.trim()

    if (queryFormatted.length === 0) {
        return escapeHTML(text)
    }

    const pattern = new RegExp(`(${escapeRegExp(queryFormatted)})`, 'ig')

    return text
        .split(pattern)
        .map((part, index) => {
            const escapedPart = escapeHTML(part)

            return index % 2 === 1
                ? `<mark>${escapedPart}</mark>`
                : escapedPart
        })
        .join('')
}
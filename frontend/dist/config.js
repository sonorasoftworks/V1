async function fetchString() {
    fetch('/api/404')
        .then(response => response.json())
        .then(data => {
            return data.string
        })
        .catch(error => {
            console.error('Error fetching the string:', error);
        });
}

self.__uv$config = {
    prefix: '/network/',
    bare: `/${fetchString}/`,
    encodeUrl:  Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/dist/handler.js?v=4',
    bundle: '/dist/bundle.js?v=4',
    config: '/dist/config.js?v=4',
    sw: '/dist/sw.js?v=4',
};
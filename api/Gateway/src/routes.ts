export type Proxy = {
    target: string;
    changeOrigin: boolean;
    pathRewrite: {
        [key: string]: string;
    }
}

export type Route = {
    url: string;
    auth: boolean;
    creditCheck: boolean;
    proxy: Proxy;
}

const ROUTES : Route[] = [
    {
        url: '/stocks*',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://stocks:5001",
            changeOrigin: true,
            pathRewrite: {
                [`^/stocks`]: '',
            },
        }
    }
]

export default ROUTES;
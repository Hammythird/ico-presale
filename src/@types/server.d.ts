declare interface ServerResponse {
    result?: any
    error?: Number
}

declare interface ResultType {
    err: string,
    result: string
}

interface WalletTypes extends NewtxsResponseType {
    updated: number
    loading?: boolean
    currentPage: string
}

interface useStoreTypes extends WalletTypes {
    update(payload: { [key: string]: string | number | boolean |PendinTypes | TxTypes | CoinTypes})
    call(url: string, params?: any): Promise<ServerResponse | null>
}
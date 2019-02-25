export interface IGetListParams {
	companyKey?: string,
	pageIndex?: number,
	pageSize?: number
}

export interface IGetPlayerByPrivateKeyParams {
	privateKey?: string
}

export interface IGetPlayerStatusParams {
	playerCode?: string,
	privateKey?: string
}

export interface IRegisterRequestParams {
	register?: any
}

export interface IRegisterParams {
	register?: any
}

export interface IPublishParams {
	model?: any
}


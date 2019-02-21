export interface IGetByNamePlaylistByNameParams {
	name?: string
}

export interface IGetByUniqueKeyPlaylistByUniqueKeyParams {
	uniqueKey?: string
}

export interface IUpdatePlaylistParams {
	model?: any
}

export interface IGetPlaylistParams {
	pageIndex?: number,
	pageSize?: number
}

export interface ISetPlaylistParams {
	playlistCreate?: any
}

export interface IGetPlaylistStatusPlaylistByCompanyKeyParams {
	companyKey?: string
}


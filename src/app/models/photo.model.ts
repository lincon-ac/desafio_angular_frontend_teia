export type Photo = {
  albumId?: number,
  id: number,
  title: string,
  url?: string,
  thumbnailUrl?: string
}

export type PhotoCadastrar = Omit<Photo, 'id'>;
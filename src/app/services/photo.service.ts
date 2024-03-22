import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Photo, PhotoCadastrar } from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private url = `${environment.api}/photos`;

  constructor(private httpClient: HttpClient) {
  }

  obterFotos() {
    return this.httpClient.get<Photo[]>(this.url);
  }

  cadastrarFoto(foto: PhotoCadastrar) {
    return this.httpClient.post<Photo>(this.url, foto);
  }

  editarFoto(foto: Photo) {
    return this.httpClient.put<Photo>(`${this.url}/${foto.id}`, foto);
  }

  remover(id: number) {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }
}
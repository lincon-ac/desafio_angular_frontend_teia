import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Photo } from '../models/photo.model';
import { Observable } from 'rxjs';
import { PhotoService } from '../services/photo.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-lista-albuns',
  templateUrl: './lista-albuns.component.html',
  styleUrls: ['./lista-albuns.component.scss']
})
export class ListaAlbunsComponent 
  implements AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'url', 'thumbnailUrl', 'acoes'];
  dataSource = new MatTableDataSource<Photo>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  registros: Photo[] = [

  ];

  registrosPorPagina: number = 10;
  paginaAtual: number = 1;

  get totalPaginas(): number {
    return Math.ceil(this.registros.length / this.registrosPorPagina);
  }

  get paginas(): number[] {
    return Array.from({ length: this.totalPaginas }, (_, index) => index + 1);
  }

  title = '';

  // fotos: Photo[] = []
  fotos$ = new Observable<Photo[]>();

  // form
  id = '';
  photo = '';
  url = '';

  constructor(private photoService: PhotoService) {
    this.obterFotosCadastradas();
  }

  obterFotosCadastradas() {
    this.fotos$ = this.photoService.obterFotos();
    this.fotos$.subscribe((resposta) => {
      if (!resposta) {
        alert('Ocorreu um erro ao buscar as fotos');
        return;
      }
      this.dataSource.data = resposta;
    })
  }

  buttonClick() {
    if (!this.photo || !this.title)
      return;

    if (this.id) {
      this.atualizar();
      return;
    }

    this.photoService.cadastrarFoto({ title: this.title })
      .subscribe(_ => this.obterFotosCadastradas())
  }

  atualizar() {
    this.photoService.editarFoto({
      id: parseInt(this.id), title: this.title
    })
      .subscribe(_ => this.obterFotosCadastradas());
  }

  preencherCampos(photo: Photo) {
    this.id = photo.id!.toString();
    // this.url = photo.url;
    this.title = photo.title;
  }

  remover(id: number) {
    this.photoService.remover(id)
      .subscribe(_ => this.obterFotosCadastradas());
      // .subscribe(_ => this.obterFotosCadastradas());
  }

} 
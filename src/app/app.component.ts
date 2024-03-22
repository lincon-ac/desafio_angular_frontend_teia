import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoService } from './services/photo.service';
import { Photo } from './models/photo.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
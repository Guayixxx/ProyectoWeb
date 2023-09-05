import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AppComponent implements OnInit {
  handleSearch(value:string){
    this.filtro_valor=value
  }

    filtro_valor = ''

 
  constructor(
    private _http: HttpClient
  )
  {}

  ngOnInit(){
    this._http.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(
      (users: any[]) => this.usuarios=users)
      
            }
     usuarios: any[]=[]  
}

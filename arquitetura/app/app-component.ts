import {Component} from 'angular2/core';

@Component({
  selector: 'meu-app',
  template:  `
     <h1>Angular 2 - Aula2</h1>
     <h2>Listagem de Tarefas</h2>
     <ul>
        <li *ngFor="#tarefa of tarefas; #i = index">
            {{tarefa}} <a href="#" (click)="remover(i)">[ x ]</a>
        </li>
     </ul>
     <input type="text" namer="tarefa" placeholder="Digite a tarefa..."
     [(ngModel)]="txtTarefa">
     <button (click)="adicionar()">Adicionar</button>
  
  `
})
export class AppComponent{
  public tarefas: string[] = [];
  public txtTarefa: string;
  
  adicionar() {
    if(this.txtTarefa != '') {
      this.tarefas.push(this.txtTarefa);
      this.txtTarefa = '';
    }
  }
  remover(index:number) {
    this.tarefas.splice(index, 1);
  }

}

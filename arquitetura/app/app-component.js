System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.tarefas = [];
                }
                AppComponent.prototype.adicionar = function () {
                    if (this.txtTarefa != '') {
                        this.tarefas.push(this.txtTarefa);
                        this.txtTarefa = '';
                    }
                };
                AppComponent.prototype.remover = function (index) {
                    this.tarefas.splice(index, 1);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n     <h1>Angular 2 - Aula2</h1>\n     <h2>Listagem de Tarefas</h2>\n     <ul>\n        <li *ngFor=\"#tarefa of tarefas; #i = index\">\n            {{tarefa}} <a href=\"#\" (click)=\"remover(i)\">[ x ]</a>\n        </li>\n     </ul>\n     <input type=\"text\" namer=\"tarefa\" placeholder=\"Digite a tarefa...\"\n     [(ngModel)]=\"txtTarefa\">\n     <button (click)=\"adicionar()\">Adicionar</button>\n  \n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map
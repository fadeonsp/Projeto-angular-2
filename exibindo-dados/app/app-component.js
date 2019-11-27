System.register(['angular2/core', './cliente'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.txtListagem = 'Listagem de clientes';
                    this.clientes = [
                        new cliente_1.Cliente(1, 'Eduardo'),
                        new cliente_1.Cliente(2, 'Cesar')
                    ];
                    this.cliente = this.clientes[0];
                }
                AppComponent.prototype.selecionar = function (index) {
                    if (index < this.clientes.length) {
                        this.cliente = this.clientes[index];
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'meu-app',
                        template: "\n      <h1>Angular 2 - Template</h1>\n      <h2>{{txtListagem | uppercase}}</h2>\n      <p>Cliente selecionado: {{cliente.nome}}</p>\n      <ul>\n        <li *ngFor=\"#cli of clientes; #i = index\">\n          <a href=\"#\" (click)=\"selecionar(i)\">   \n              {{cli.id}} - {{cli.nome}}\n          </a>    \n        </li>\n        \n      </ul>\n"
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
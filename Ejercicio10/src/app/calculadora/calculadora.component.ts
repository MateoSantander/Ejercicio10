import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})


export class CalculadoraComp implements OnInit {
 n1 = 0
 n2 = 0
 resultado = 0

 constructor(){}

ngOnInit() {}

    Suma() {
        let resultadofinal =  Number(this.n1) + Number(this.n2)
        this.resultado = resultadofinal
    }
     Resta() {
        let resultadofinal = this.n1 - this.n2
        this.resultado = resultadofinal
    }
     Multiplicacion() {
        let resultadofinal = this.n1 * this.n2
        this.resultado = resultadofinal
    }
     Division() {
        let resultadofinal = this.n1 / this.n2
        this.resultado = resultadofinal
    }
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  templateUrl: './palindromo.component.html',
  styleUrls: ['./palindromo.component.css']
})
export class PalindromoComponent {
valor: number = 0 ;
resultado: string = '';
mensagem: string = '';

relate (){

  const inicio = this.valor.toString ();
  const Inverso = inicio.split('').reverse().join('');

  if ( inicio === Inverso){
    this.resultado = "A combinação " +this.valor +"  é um palíndromo";
  }
  else if (inicio != Inverso ){
    this.resultado = "A combinação  " +this.valor +"  não é um palíndromo";
  }

}
}

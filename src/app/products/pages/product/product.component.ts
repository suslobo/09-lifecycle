import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  public isProductVisible: boolean= false;
  public currentPrice: number= 10;

  constructor() {
    console.log('Constructor');
  }
  //para hacer la primera petición HTTP
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  //se utiliza si vas a estar pendiente de los cambios, de las propiedades... o de los inputs que tenemos en price.component.ts (el hijo)
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes})
    console.log('ngOnChanges');
  }
  //ngDoCheck,ngAfterContentInit,ngAfterContentChecked, ngAfterViewInit
  //estos son cuando suceden cambios ya sea en inputs o en propiedades cuando el componente detecta algún cambio
  //se usan muy poco
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  //hace la limpieza si en el ngOnInit tenemos algún tipo de lista que se está ejecuntado a lo largo que el componente esté en pantalla
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++; //lo incrementamos en uno
  }






}

import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';

//este es un componente hijo
@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
  }



}

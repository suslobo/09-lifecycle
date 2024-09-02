import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

//este es un componente hijo
@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public price:number = 0;

  //creamos una nueva propiedad
  //les ponemos el simbolo de $ para saber que es un observable
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    //interval es un observable que emite valores de manera secuencial basado en un periodo de tiempo
    this.interval$ = interval(1000).subscribe( value => console.log(`Tick: ${value}`));

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({changes});
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.interval$?.unsubscribe(); //el unsubscribe cancela la suscripción de ese observable
  }



}

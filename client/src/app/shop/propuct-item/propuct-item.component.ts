import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-propuct-item',
  templateUrl: './propuct-item.component.html',
  styleUrls: ['./propuct-item.component.scss']
})
export class PropuctItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
  }

  addItemToBasket(){
    this.basketService.addItemToBasket(this.product)
  }

}

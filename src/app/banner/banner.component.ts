import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BannerService } from '../services/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  public show: Boolean = false;
  public type: String = "";
  public backgroundImage: String = "";
  public name: String = "";
  public description: String = "";
  public image: String = "";
  public buttonText: String = "";
  public link: String = "";

  constructor(public bannerService: BannerService) {
    this.bannerService
      .getBanners('https://hack.kunderlabs.com/exam/telecom/api/products/new')
      .subscribe((res: any) => {
        this.show = res.product.show;
        this.type = res.product.type;
        this.backgroundImage = res.product.backgroundImg;
        this.name = res.product.productName;
        this.description = res.product.productDescription;
        this.image = res.product.productImg;
        this.buttonText = res.product.buttonText;
        this.link = res.product.link;
        console.log(res.product.show);
      });
  }

  ngOnInit(): void {}
}

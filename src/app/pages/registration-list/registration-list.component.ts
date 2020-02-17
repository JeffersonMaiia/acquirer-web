import { Component, OnInit } from '@angular/core';
import {AccreditationService} from "../../core/service/accreditation.service";
import {MerchantService} from "../../core/service/merchant.service";
import {Merchant} from "../../core/model/merchant.model";

@Component({
  selector: 'app-registration-list',
  templateUrl: './registration-list.component.html',
  styleUrls: ['./registration-list.component.scss']
})
export class RegistrationListComponent implements OnInit {

  constructor(private merchantService: MerchantService,
              private accreditationService: AccreditationService) { }

  merchants: Merchant[];

  ngOnInit() {
    this.loadMerchants();
  }

  update(idMerchant: number){

  }

  excluir(idMerchant: number){
    this.accreditationService.deleteMerchant(idMerchant).subscribe(
        response => {
          this.loadMerchants();
        }
    );
  }

  private loadMerchants(){
      this.merchantService.getMerchant().subscribe(
          response => {
            this.merchants = response as Merchant[];
          },
          error => console.error(error)
      );
  }

}

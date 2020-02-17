import {Component, OnInit} from '@angular/core';
import {Accreditation} from "../../core/model/accreditation.model";
import {AccreditationService} from "../../core/service/accreditation.service";
import {Merchant} from "../../core/model/merchant.model";
import {Address} from "../../core/model/address.model";
import {DomicileBank} from "../../core/model/domicile-bank.model";
import {Email} from "../../core/model/email.model";
import {Phone} from "../../core/model/phone.model";
import {ApiError} from "../../core/model/apiError/api-error.model";
import {Validation} from "../../core/model/apiError/rest-validation.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ZipCodeService} from "../../core/service/zip-code.service";

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    accreditation: Accreditation;
    validation: Validation;

    constructor(private accreditationService: AccreditationService,
                private zipCodeService: ZipCodeService,
                private router: Router) {
    }

    ngOnInit() {
        this.initForm();
    }

    initForm() {
        this.accreditation = new Accreditation();

        this.accreditation.phones.push(new Phone());
        this.accreditation.phones.push(new Phone());

        this.accreditation.emails.push(new Email());
        this.accreditation.emails.push(new Email());

        this.accreditation.domicileBank.push(new DomicileBank(1));
        this.accreditation.domicileBank.push(new DomicileBank(2));
        this.accreditation.domicileBank.push(new DomicileBank(3));
    }

    salvar() {
        this.accreditationService.createAccreditation(this.accreditation).subscribe(
            data => {
                this.initForm();
                this.router.navigate(['/cadastro-list']);
            },
            error => {
                this.validation = error.error;
                if( error.error.apierror.status == 'BAD_REQUEST') {
                    console.log(error.error.apierror.status);
                }
            }
        );
    }

    buscarCep(){
        this.zipCodeService.getAddress(this.accreditation.address.zipCode).subscribe(
            data => {
                this.accreditation.address = data as Address;
            },error => {
                console.log("ERRO AO CONSULTA CEP!")
            }
        );
    }

}

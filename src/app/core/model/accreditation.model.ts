import {Address} from "./address.model";
import {DomicileBank} from "./domicile-bank.model";
import {Email} from "./email.model";
import {Merchant} from "./merchant.model";
import {Phone} from "./phone.model";

export class Accreditation {
    address: Address;
    domicileBank: DomicileBank[] = [];
    emails: Email[] = [];
    merchant: Merchant;
    phones: Phone[] = [];


    constructor() {
        this.address = new Address();
        this.merchant = new Merchant();
    }
}











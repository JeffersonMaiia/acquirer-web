import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {RegistrationComponent} from "./pages/registration/registration.component";
import { RegistrationListComponent } from './pages/registration-list/registration-list.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        NgbModule,
        RouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        RegistrationComponent,
        RegistrationListComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationComponent} from "./pages/registration/registration.component";
import {RegistrationListComponent} from "./pages/registration-list/registration-list.component";

const routes: Routes = [
    {path: 'cadastro', component: RegistrationComponent},
    {path: 'cadastro-list', component: RegistrationListComponent},
    {path: '**', redirectTo: 'cadastro'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}

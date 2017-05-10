import {Routes,RouterModule} from '@angular/router';
import {FormComponent } from './form/form.component';
import {HomeComponent} from './home/home.component';
const APP_ROUTES: Routes =[
    { path:'',component: HomeComponent },
    { path:'form',component: FormComponent},
    { path:'**',redirectTo:'/',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

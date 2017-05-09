import {Routes,RouterModule} from '@angular/router';
import {FormComponent } from './form/form.component';
const APP_ROUTES: Routes =[
    { path:'',redirectTo:'/form',pathMatch:'full' },
    { path:'form',component: FormComponent},
    { path:'**',redirectTo:'/form',pathMatch:'full'}
];

export const routing = RouterModule.forRoot(APP_ROUTES);

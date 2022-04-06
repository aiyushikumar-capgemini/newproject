import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverProfileComponent } from './driver-profile/driver-profile.component';
import { MapComponent } from './map/map.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [{path: '',redirectTo: '/navigate',pathMatch:'full'},
                        {path: 'navigate', component: NavigationComponent},
                        {path:"signUp", component:SignupComponent},
                        {path:"driver-profile", component:DriverProfileComponent},
                        {path:"map", component:MapComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

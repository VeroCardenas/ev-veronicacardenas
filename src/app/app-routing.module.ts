import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadFileComponent } from './load-file/load-file.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
},
{
  path: 'load-file',
  component: LoadFileComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NormativasPage } from './normativas.page';

const routes: Routes = [
  {
    path: '',
    component: NormativasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NormativasPageRoutingModule {}

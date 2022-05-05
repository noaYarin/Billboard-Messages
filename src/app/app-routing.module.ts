import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillboardPageComponent } from './pages/billboard-page/billboard-page.component';
import { AddMessagePageComponent } from './pages/add-message-page/add-message-page.component';
import { EditMessagePageComponent } from './pages/edit-message-page/edit-message-page.component';

const routes: Routes = [
  { path: '', component: BillboardPageComponent },
  { path: 'addMessage', component: AddMessagePageComponent },
  { path: 'editMessage/:msgId', component: EditMessagePageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

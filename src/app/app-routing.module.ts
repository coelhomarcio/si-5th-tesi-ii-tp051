import { NgModule }             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent }     from "./home/home.component";
import { SimpleComponent }   from "./simple/simple.component";
import { CompoundComponent } from "./compound/compound.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "simple", component: SimpleComponent },
  { path: "compound", component: CompoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule }           from "@angular/core";
import { MatToolbarModule }   from "@angular/material/toolbar";
import { MatListModule }      from "@angular/material/list";
import { MatButtonModule }    from "@angular/material/button";
import { MatMenuModule }      from "@angular/material/menu";
import { MatIconModule }      from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule }     from "@angular/material/input";
import { MatSelectModule }    from "@angular/material/select";
import { MatTableModule }     from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";

const materials = [
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule
];

@NgModule({
  imports: materials,
  exports: materials
})
export class MaterialModule {
}

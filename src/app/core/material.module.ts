import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardHarness} from '@angular/material/card/testing';
const matModules = [
  MatMenuModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatDividerModule,
  MatCardModule,
  MatIconModule,
  MatFormFieldModule,
  MatSliderModule,
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatSnackBarModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatBadgeModule,
  MDBBootstrapModule,
  MatGridListModule
];


@NgModule({
  declarations: [],
  imports: [...matModules],
  exports: [...matModules],
  providers: []
})
export class MaterialModule {}


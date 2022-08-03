import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const coreModules = [MaterialModule, HttpClientModule, FormsModule, ReactiveFormsModule];
@NgModule({
  declarations: [],
  imports: [...coreModules],
  exports: [...coreModules]
})
export class CoreModule {}

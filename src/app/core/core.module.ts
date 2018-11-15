import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../shared/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ToolbarComponent, TopComponent} from './components';
import {BrowserModule} from '@angular/platform-browser';
import {throwIfAlreadyLoaded} from './module-import-guard';
import {CustomIconService} from './services';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    BrowserModule,
    FlexLayoutModule,
  ],
  declarations: [ToolbarComponent, TopComponent],
  exports: [CommonModule, BrowserModule, MaterialModule, ToolbarComponent, TopComponent],
  providers: [CustomIconService]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

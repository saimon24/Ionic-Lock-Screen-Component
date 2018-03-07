import { LockScreenComponent } from './components/lock-screen-component';
import { Observable } from 'rxjs';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  declarations: [
    LockScreenComponent
  ],
  exports: [
    LockScreenComponent
  ]
})
export class MyModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyModule,
      providers: [ ]
    };
  }
}


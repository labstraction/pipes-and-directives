import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { FirstUpperPipe } from './pipes/first-upper/first-upper.pipe';
import { ToAgePipe } from './pipes/to-age/to-age.pipe';
import { EllipsisPipe } from './pipes/ellipsis/ellipsis.pipe';
import { SpecialButtonDirective } from './directives/special-button/special-button.directive';
import { UnlessDirective } from './directives/unless/unless.directive';



@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    DirectiveComponent,
    FirstUpperPipe,
    ToAgePipe,
    EllipsisPipe,
    SpecialButtonDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { TableComponent } from './table/table.component';
import { TabesComponent } from './tabes/tabes.component';
import { DropComponent } from './drop/drop.component';
import { DropdownDirectives } from './dropdown.directive';





@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    TableComponent,
    TabesComponent,
    DropComponent,
    DropdownDirectives
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

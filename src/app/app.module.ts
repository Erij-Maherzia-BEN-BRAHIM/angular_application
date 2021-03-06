import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ChildComponent } from './child/child.component';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { ModelsComponent } from './models/models.component';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { MicrosoftWordComponent } from './microsoft-word/microsoft-word.component';
import { EtatServeursComponent } from './etat-serveurs/etat-serveurs.component';
import { PremiersCaracteresPipe } from './etat-serveurs/premiers-caracteres.pipe';
import { FilterPipe } from './etat-serveurs/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    DetailsComponent,
    ItemComponent,
    ListeComponent,
    ModelsComponent,
    AddAccountComponent,
    HomeAccountComponent,
    ItemAccountComponent,
    MicrosoftWordComponent,
    EtatServeursComponent,
    PremiersCaracteresPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

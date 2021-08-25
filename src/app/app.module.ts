import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { TableModule } from 'primeng/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './structure/header/header.component';
import { FooterComponent } from './structure/footer/footer.component';
import { MainMenuComponent } from './structure/main-menu/main-menu.component';
import { LinksComponent } from './structure/links/links.component';
import { SubMenuComponent } from './structure/sub-menu/sub-menu.component';
import { ContentComponent } from './structure/content/content.component';
import { FilterComponent } from './components/filter/filter.component';
import { BasicTableComponent } from './components/basic-table/basic-table.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ListComponent } from './components/list/list.component';
import { SideBarComponent } from './structure/side-bar/side-bar.component';
import { SectionNameComponent } from './components/section-name/section-name.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { HeaderMenuComponent } from './structure/header-menu/header-menu.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableExportComponent } from './components/table-export/table-export.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainMenuComponent,
    LinksComponent,
    SubMenuComponent,
    ContentComponent,
    FilterComponent,
    BasicTableComponent,
    DataTableComponent,
    ListComponent,
    SideBarComponent,
    SectionNameComponent,
    BreadcrumbsComponent,
    ToolbarComponent,
    HeaderMenuComponent,
    PaginationComponent,
    TableExportComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    // primeNG
    ButtonModule,
    DialogModule,
    RatingModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

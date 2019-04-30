import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import {
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatRippleModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { MembersComponent } from './pages/members/members.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { AreasComponent } from './pages/areas/areas.component';
import { MemberCardComponent } from './pages/member-card/member-card.component';
import { MemberDetailComponent } from './pages/member-detail/member-detail.component';
import { SideNavComponent } from './pages/side-nav/side-nav.component';
import { GroupCardComponent } from './pages/group-card/group-card.component';
import { GroupDetailsComponent } from './pages/group-details/group-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaCardComponent } from './pages/area-card/area-card.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'groups/:id', component: GroupDetailsComponent },
  { path: 'areas', component: AreasComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MembersComponent,
    GroupsComponent,
    AreasComponent,
    MemberCardComponent,
    MemberDetailComponent,
    SideNavComponent,
    GroupCardComponent,
    GroupDetailsComponent,
    AreaCardComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
        useHash: true
      }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

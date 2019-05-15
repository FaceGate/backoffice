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
  MatNativeDateModule,
  MatSnackBarModule,
  MatProgressBarModule
} from '@angular/material';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MembersComponent } from './components/members/members.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AreasComponent } from './components/areas/areas.component';
import { MemberCardComponent } from './components/member-card/member-card.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { MemberEnrollmentComponent } from './components/member-enrollment/member-enrollment.component';
import { GroupCreationComponent } from './components/group-creation/group-creation.component';

//TODO refacto with children routing
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  },
  { path: 'members', children: [
    { path: '', redirectTo: '/members/list', pathMatch: 'full' },
    { path: 'list', component: MembersComponent },
    { path: 'enrollment', component: MemberEnrollmentComponent },
    { path: ':id', component: MemberDetailComponent },
  ]},
  
  { path: 'groups', children: [
    { path: '', redirectTo: '/groups/list', pathMatch: 'full' },
    { path: 'list', component: GroupsComponent },
    { path: 'creation', component: GroupCreationComponent },
    { path: ':id', component: GroupDetailsComponent },
  ]},
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
    AreaCardComponent,
    MemberEnrollmentComponent,
    GroupCreationComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false,
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
    MatNativeDateModule,
    MatSnackBarModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

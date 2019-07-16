import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { GroupCardComponent } from './components/group-card/group-card.component';
import { GroupDetailsComponent } from './components/group-details/group-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaCardComponent } from './components/area-card/area-card.component';
import { MemberEnrollmentComponent } from './components/member-enrollment/member-enrollment.component';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { environment } from 'src/environments/environment';

export const cloudinaryConfiguration = {
  cloud_name: environment.cloud_name,
  upload_preset: environment.upload_preset
};

//TODO refacto with children routing
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/members/list',
    pathMatch: 'full'
  },
  { path: 'members', children: [
    { path: '', redirectTo: '/members/list', pathMatch: 'full' },
    { path: 'list', component: MembersComponent },
    { path: 'enrollment', component: MemberEnrollmentComponent },
    { path: ':id', component: MemberEnrollmentComponent },
  ]},
  
  { path: 'groups', children: [
    { path: '', redirectTo: '/groups/list', pathMatch: 'full' },
    { path: 'list', component: GroupsComponent },
    { path: 'creation', component: GroupDetailsComponent },
    { path: ':id', component: GroupDetailsComponent },
  ]},
  { path: 'areas', component: AreasComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
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
    HttpClientModule,
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
    MatProgressBarModule,
    CloudinaryModule.forRoot(Cloudinary, cloudinaryConfiguration)
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MembersComponent,
    GroupsComponent,
    AreasComponent,
    MemberCardComponent,
    SideNavComponent,
    GroupCardComponent,
    GroupDetailsComponent,
    AreaCardComponent,
    MemberEnrollmentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

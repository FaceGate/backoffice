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
  MatSlideToggleModule
} from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MembersComponent } from './members/members.component';
import { TeamsComponent } from './teams/teams.component';
import { AreasComponent } from './areas/areas.component';
import { MemberCardComponent } from './member-card/member-card.component';
import Member from './class/member/member';
import { Team } from './class/team/team';
import { MemberDetailComponent } from './member-detail/member-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/members',
    pathMatch: 'full'
  },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'areas', component: AreasComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    MembersComponent,
    TeamsComponent,
    AreasComponent,
    MemberCardComponent,
    MemberDetailComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatChipsModule,
    MatSlideToggleModule
  ],
  providers: [
    Member,
    Team
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

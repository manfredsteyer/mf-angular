import { HttpClient } from '@angular/common/http';
import {Component, ViewChild, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthLibService } from 'auth-lib';
import { OtherLibService } from 'other-lib';

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html'
})
export class FlightsSearchComponent {
  constructor(
    private http: HttpClient,
    private authService: AuthLibService,
    private otherService: OtherLibService) {

      console.log('Got HttpClient!');

    console.log('user from authService', authService.user);
    console.log('otherUser from authService', authService.otherUser);
    console.log('otherUser from authService', otherService.userName);

  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'inicio', url: '/folder/home', icon: 'home' },
    { title: 'youtube', url: '/folder/Youtube', icon: 'youtube' },
    { title: 'biblioteca', url: '/folder/Biblioteca', icon: 'book' },
    { title: 'moodle', url: '/folder/Moodle', icon: 'folder' },
    { title: 'edulab', url: '/folder/Edulab', icon: 'filing' },
    { title: 'programas', url: '/folder/Programas', icon: 'list' },
    { title: 'normativas', url: '/folder/Normativas', icon: 'paper' },
    { title: 'eventos', url: '/folder/Eventos', icon: 'calendar' },
  ];

  constructor() {}
}

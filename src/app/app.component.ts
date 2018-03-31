import {Component} from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {
      title: 'Mon super titre 1',
      content: 'Animalis messiss, tanquam lotus cobaltum.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon super titre 2',
      content: 'Everything we do is connected with art: dogma, faith, result, advice.',
      loveIts: -2,
      created_at: new Date()
    },
    {
      title: 'Mon super titre 3',
      content: 'Confucius says: i die and i contact. i wrestle and i preach. i disturb and i fail.',
      loveIts: 1,
      created_at: new Date()
    }
  ];
}

import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutmeComponent} from "./aboutme/aboutme.component";
import {ArticlesComponent} from "./articles/articles.component";
import {CommandsComponent} from "./commands/commands.component";
import {ProgLanguagesComponent} from "./prog-languages/prog-languages.component";
import {SkillsComponent} from "./skills/skills.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'about',
    component: AboutmeComponent,
    title: 'About Me'
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    title: 'Articles'
  },
  {
    path: 'commands',
    component: CommandsComponent,
    title: 'Commands'
  },
  {
    path: 'prog',
    component: ProgLanguagesComponent,
    title: 'Programming languages'
  },
  {
    path: 'skill',
    component: SkillsComponent,
    title: 'Skills'
  }
];

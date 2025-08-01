import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
import { Publish } from './components/publish/publish';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar,Footer,Publish],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}

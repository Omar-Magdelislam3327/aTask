import { Component } from '@angular/core';
import { NavComponent } from '../shared/nav/nav.component';
import { CommonModule, NgIf } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-submission',
  standalone: true,
  imports: [
    NavComponent , NgIf , CommonModule
  ],
  templateUrl: './submission.component.html',
  styleUrl: './submission.component.css',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class SubmissionComponent {
  progress = 10;
  progressBarWidth = '10%';
  isImageVisible = false;
  isProgressVisible = true;
  isOperationDone= false;
  ngOnInit() {
    this.startProgress();
  }

  startProgress() {
    let currentProgress = this.progress;
    const interval = setInterval(() => {
      if (currentProgress >= 100) {
        clearInterval(interval);
        this.isProgressVisible = false;
        this.isImageVisible = true;
        this.isOperationDone = true;
      } else {
        currentProgress += 10;
        this.progressBarWidth = `${currentProgress}%`;
        this.progress = currentProgress;
      }
    }, 500);
  }
}

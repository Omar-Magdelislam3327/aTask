import { Routes } from '@angular/router';
import { PreStepComponent } from './panel/pre-step/pre-step.component';
import { SelectionOneComponent } from './panel/selection-one/selection-one.component';
import { SelectionTwoComponent } from './panel/selection-two/selection-two.component';
import { PropOneComponent } from './panel/prop-one/prop-one.component';
import { PropTwoComponent } from './panel/prop-two/prop-two.component';
import { SubmissionComponent } from './panel/submission/submission.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path:"home" , component : PreStepComponent},
  {path:"selectOne" , component : SelectionOneComponent , },
  {path:"selectTwo" , component : SelectionTwoComponent , },
  {path:"propOne" , component : PropOneComponent , },
  {path:"propTwo" , component : PropTwoComponent , },
  {path:"submit" , component : SubmissionComponent , },
  {path:"" , redirectTo : "home" , pathMatch:"full"}
];

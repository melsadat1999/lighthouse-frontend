import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { ReportHistoryComponent } from './components/report-history/report-history.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsListComponent,
  },
  {
    path: 'addProject',
    component: AddProjectComponent,
  },
  {
    path: 'reportHistory',
    component: ReportHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsStatisticsRoutingModule {}

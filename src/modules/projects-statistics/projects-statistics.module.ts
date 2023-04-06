import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsStatisticsRoutingModule } from './projects-statistics-routing.module';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { PercentPipe } from './pipe/percent.pipe';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ColorStatusPipe } from './pipe/color-status.pipe';
import { LoadingModule } from 'src/shared/components/loading/loading.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportHistoryComponent } from './components/report-history/report-history.component';

@NgModule({
  declarations: [
    ProjectsListComponent,
    AddProjectComponent,
    PercentPipe,
    ProgressBarComponent,
    ColorStatusPipe,
    ReportHistoryComponent,
  ],
  imports: [
    CommonModule,
    ProjectsStatisticsRoutingModule,
    LoadingModule,
    ReactiveFormsModule,
  ],
})
export class ProjectsStatisticsModule {}

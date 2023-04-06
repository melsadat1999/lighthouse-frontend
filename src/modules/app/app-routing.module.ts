import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'projects-statistics', pathMatch: 'full' },
  {
    path: 'projects-statistics',
    loadChildren: () =>
      import('../projects-statistics/projects-statistics.module').then(
        (m) => m.ProjectsStatisticsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

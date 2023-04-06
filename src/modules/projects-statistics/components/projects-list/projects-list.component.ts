import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Config } from 'src/shared/confing/config';
import { HttpService } from 'src/shared/services/http.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss'],
})
export class ProjectsListComponent implements OnInit {
  loading: boolean = false;
  projectList: any[] = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getProjectList();
  }

  getProjectList() {
    this.httpService.get(Config.projects).subscribe((res) => {
      console.log(res);
      this.projectList = res;
    });
  }

  generateReport(project: any) {
    project.loading = true;
    this.httpService
      .get(Config.generateReport + `${project.id}`)
      .pipe(finalize(() => (project.loading = false)))
      .subscribe((res) => {
        console.log(res);
        project.reports = [...res.reports];
      });
  }
}

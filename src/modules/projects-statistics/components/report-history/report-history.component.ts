import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Config } from 'src/shared/confing/config';
import { HttpService } from 'src/shared/services/http.service';

@Component({
  selector: 'app-report-history',
  templateUrl: './report-history.component.html',
  styleUrls: ['./report-history.component.scss'],
})
export class ReportHistoryComponent implements OnInit {
  reports: any[] = [];
  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getReportsList();
  }

  getReportsList() {
    const id = this.activatedRoute.snapshot.queryParams['projectId'];
    this.httpService.get(Config.reportsProject + `/${id}`).subscribe((res) => {
      this.reports = res;
      console.log(this.reports);
    });
  }
}

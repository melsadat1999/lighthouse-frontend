import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, finalize } from 'rxjs';
import { Config } from 'src/shared/confing/config';
import { HttpService } from 'src/shared/services/http.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  frontend: any[] = ['Vuejs', 'ReactJs', 'Anguler', 'MVC', 'Drupal'];
  backend: any[] = ['.NET Core', '.NET MVC', 'Nestjs', 'Drupal', 'Python'];
  form: FormGroup = new FormGroup({});
  loading: boolean = false;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isEdit = !!this.activatedRoute.snapshot.queryParams['projectId'];
    this.handelFromBuild();
    this.handelOldData();
  }
  handelOldData() {
    if (this.isEdit) {
      this.form.patchValue({
        ...this.activatedRoute.snapshot.queryParams,
      });
    }
  }

  handelFromBuild() {
    this.form = this.fb.group({
      projectName: this.fb.control('', Validators.required),
      platform: this.fb.control('', Validators.required),
      backend: this.fb.control('', Validators.required),
      frontend: this.fb.control('', Validators.required),
      url: this.fb.control('', [
        Validators.required,
        Validators.pattern(
          /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/
        ),
      ]),
    });
  }

  addNewProject() {
    if (this.isEdit) {
      return this.updateProject();
    }
    this.loading = true;
    this.http
      .post(Config.projects, { ...this.form.value })
      .pipe(
        delay(200),
        finalize(() => (this.loading = false))
      )
      .subscribe((res) => {
        this.router.navigate(['./projects-statistics']);
      });
  }

  updateProject() {
    this.loading = true;
    this.http
      .put(
        Config.projects +
          `/${this.activatedRoute.snapshot.queryParams['projectId']}`,
        { ...this.form.value }
      )
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((res) => {
        this.router.navigate(['./projects-statistics']);
      });
  }
}

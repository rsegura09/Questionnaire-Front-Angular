import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISurvey } from 'src/app/model/survey.models';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css'],
})
export class CreatesurveyComponent {
  private PERSON_ID : string = sessionStorage.getItem('personId')!;

  constructor(
    private formBuilder: FormBuilder,
    private _surveyService: SurveyService
  ) {}

  surveyForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    startDate: ['', Validators.required],
    startHour: ['', Validators.required],
  });

  submitSurvey(): void {
    const date = this.surveyForm.value.startDate+'T'+ this.surveyForm.value.startHour;
    const data: ISurvey = {
      personId: this.PERSON_ID,
      title: this.surveyForm.value.title!,
      description: this.surveyForm.value.description!,
      startDate: new Date(date),
    };
    this._surveyService.postSurvey(data);
  }

  addSurvey(survey: ISurvey) {
    this._surveyService.postSurvey(survey).subscribe({
      next: (result) =>{
        console.log("Agregado correctamente");
      },
      error: (err) => {
        console.error("Error al agregar cuestionario", err)
      }
    });
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ISurvey } from 'src/app/model/survey.models';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';
import { CommonModule, DatePipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SurveyResponse,  Survey } from 'src/app/model/survey.models';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  standalone: true,
  imports: [DatePipe, ReactiveFormsModule, CommonModule],
  styleUrls: ['./createsurvey.component.css'],
})
export class CreatesurveyComponent implements OnInit {
  private PERSON_ID: string = sessionStorage.getItem('personId')!;
  surveyList: Survey[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _surveyService: SurveyService
  ) {}

  ngOnInit(): void {
    this.getAllSurveys();
  }

  surveyForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    startDate: ['', Validators.required],
    startHour: ['', Validators.required],
  });

  getAllSurveys() {
    this._surveyService.getAllSurveys().subscribe({
      next: (response: SurveyResponse) => {
        this.surveyList = response.value.items;
        console.log(this.surveyList);
      },
      error: (error) => {
        console.error('Error al obtener información de la encuesta:', error);
      },
    });
  }

  submitSurvey(): void {
    const date =
      this.surveyForm.value.startDate + 'T' + this.surveyForm.value.startHour;
    const data: ISurvey = {
      personId: this.PERSON_ID,
      title: this.surveyForm.value.title!,
      description: this.surveyForm.value.description!,
      startDate: new Date(date),
    };
    this.addSurvey(data);
    this.resetForm();
    this.getAllSurveys();
  }

  addSurvey(survey: ISurvey) {
    this._surveyService.postSurvey(survey).subscribe({
      next: (result) => {
        console.log('Cuestionario agregado correctamente!');
      },
      error: (err) => {
        console.error('Error al agregar cuestionario', err);
      },
    });
  }

  deleteSurvey(id : String){
    this._surveyService.
  }

  resetForm(){
    this.surveyForm.reset();
  }
}

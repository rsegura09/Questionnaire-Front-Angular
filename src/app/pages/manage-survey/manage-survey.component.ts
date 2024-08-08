import { Component, OnInit, NgModule } from '@angular/core';
import { Survey } from 'src/app/model/person.models';
import { FormsModule } from '@angular/forms';
import { SurveyService } from 'src/app/service/questionnaire/survey.service';


@Component({
  selector: 'app-manage-survey',
  templateUrl: './manage-survey.component.html',
  styleUrls: ['./manage-survey.component.css'],
})
export class ManageSurveyComponent implements OnInit {
  survey!: Survey;
  questions! : any[];

  constructor (private _surveyService : SurveyService){

  }

  ngOnInit(): void {
    const infoSurvey = sessionStorage.getItem('survey');
    if (infoSurvey) {
      this.survey = JSON.parse(infoSurvey);
      console.log('Carga exitosa! Manage survey!');
      console.log(this.survey);
    } else {
      console.log('No exite survey en el sessionStorage!');
    }
    this.getQuestions();
  }

  getQuestions(){
    this._surveyService.getQuestions().subscribe({
      next: (response: any) => {
        this.questions = response.value.items;
      },
      error: (error) => {
        console.error('Error al obtener información de las preguntas:', error);
      },
    });
  }

  getInfoSurvey() {
    this;
  }
}

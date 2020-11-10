import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  data = "";
  questionSize = 20;
  numbers: Array<any> = [];
  questions: any[];
  currentQuestion = {
    index:0,
    qnumber: '',
    label: '',
    choices: []
  };
  answers={

  };

  constructor(private router: ActivatedRoute, private route: Router, private questionService: QuestionService) {
    this.numbers = Array.from({ length: this.questionSize }, (v, k) => k + 1);
  }

  ngOnInit(): void {
    this.data = this.router.snapshot.params.name;
    this.getQuestions();
    

  }

  onClick(question,index): void {
    //this.route.navigateByUrl('question/:name')
    console.log('ques', question);
    this.currentQuestion.qnumber = this.questions[index].qnumber;
    this.currentQuestion.label = question.label
    this.currentQuestion.choices = question.choices
    this.currentQuestion.index=index
  }

  getQuestions() {
    this.questionService.getQuestions().subscribe((res) => {
      console.log('questions', res)
      this.questions = res.questions;
      this.currentQuestion.qnumber = this.questions[0].qnumber;
      this.currentQuestion.label = this.questions[0].label;
      this.currentQuestion.choices = this.questions[0].choices;
      this.currentQuestion.index=0;
    });

  }

  nextAndPrevious(value) {
    if (value === 'next') {
      if(this.currentQuestion.index < this.questions.length){
        this.currentQuestion.index++;
        this.currentQuestion.qnumber = this.questions[this.currentQuestion.index].qnumber;
        this.currentQuestion.label=this.questions[this.currentQuestion.index].label;
        this.currentQuestion.choices=this.questions[this.currentQuestion.index].choices;
      }
     
    }else if(value === 'previous'){
      if(this.currentQuestion.index > 0){
        this.currentQuestion.index--;
        this.currentQuestion.qnumber = this.questions[this.currentQuestion.index].qnumber;
        this.currentQuestion.label=this.questions[this.currentQuestion.index].label;
        this.currentQuestion.choices=this.questions[this.currentQuestion.index].choices;
      }

    }
  }



}

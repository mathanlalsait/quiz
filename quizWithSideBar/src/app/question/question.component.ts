import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  data="";
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.data=this.router.snapshot.params.name;
  }

}

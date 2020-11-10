import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.css']
})
export class InstructionComponent implements OnInit {

  title="";
  
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.title=this.router.snapshot.params.name;
  }

}

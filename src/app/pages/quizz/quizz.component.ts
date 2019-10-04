import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup
  } from '@angular/forms';
import { AnimeJsProvider } from 'src/app/shared/provider';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit {
  public title: string = 'Tests';
  public quizzForm: FormGroup;
  public formControls;
  public quizzQuestion = [
    {
      questionTitle: 'question',
      data: [
        { id: 1, text: 'Test 1' },
        { id: 2, text: 'Test 2' },
        { id: 3, text: 'Test 3' },
        { id: 4, text: 'Test 4' },
      ],
    },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private animeProvider: AnimeJsProvider
  ) {
    // Init all checkbox to false
    this.formControls = this.quizzQuestion[0].data.map(
      control => new FormControl(false)
    );

    this.quizzForm = this.formBuilder.group({
      data: new FormArray(this.formControls),
    });
  }

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => this.animeProvider.fadeInMain(), 0);
  }
  public submit() {}
}

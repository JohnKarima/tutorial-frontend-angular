import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
    selector: 'app-add-tutorial',
    templateUrl: './add-tutorial.component.html',
    styleUrls: ['./add-tutorial.component.css']
  })
  export class AddTutorialComponent implements OnInit {
    public Editor = ClassicEditor;

    tutorial = {
      title: '',
      description: '',
      tutorial_image: '',
      tutorial_content: '',
      tutorial_author: '',
      published: false
    };
    submitted = false;
  
    constructor(private tutorialService: TutorialService) { }
  
    ngOnInit() {
    }
  
    saveTutorial() {
      const data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        tutorial_image: this.tutorial.tutorial_image,
        tutorial_content: this.tutorial.tutorial_content,
        tutorial_author: this.tutorial.tutorial_author,
      };
  
      this.tutorialService.create(data)
        .subscribe(
          response => {
            console.log(response);
            this.submitted = true;
          },
          error => {
            console.log(error);
          });
    }
  
    newTutorial() {
      this.submitted = false;
      this.tutorial = {
        title: '',
        description: '',
        tutorial_image: '',
        tutorial_content: '',
        tutorial_author: '',
        published: false
    
      };
    }
  }
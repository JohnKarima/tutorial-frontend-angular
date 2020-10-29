import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})


export class RegistrationComponent implements OnInit {
    input;

    constructor(
        private tutorialService: TutorialService,
        private route: ActivatedRoute,
        private router: Router) { }
    

    ngOnInit() {
        this.input = {
            username: '',
            password: '',
            email: '',

        };
    }
    
    registerUser(){
        this.tutorialService.registerNewUser(this.input).subscribe(
            response => {
                alert('User ' + this.input.username + ' has been created')
            },
            error => console.log('error', error)

        );

    }

    loginUser(){
        this.tutorialService.loginUser(this.input).subscribe(
            response => {
                alert('User ' + this.input.username + ' has been logged in')
            },
            error => console.log('error', error)

        );

    }

}

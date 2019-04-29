import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { AlertService } from '../_services/alert.service';
//import { EndUserLinkService } from '../end-user-link.service';
//import { StoreUidService } from '../store-uid.service';
//import { EndUserService } from '../end-user.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    phoneno;
    registerError;
    
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        //private eul: EndUserLinkService,
        //private euid: StoreUidService
    ) {
        // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }
    }
    //euser: EndUserService;
    ngOnInit() {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };

        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            lastName: ['', [Validators.required, Validators.minLength(2)]],
            email: ['', [Validators.required,Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: [''],
            phone: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
            gender: ['', Validators.required],
            type: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        console.log("Register");
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // building JSON for form data
        

        const formData = {

            firstname: this.f.firstName.value,
            lastname: this.f.lastName.value,
            email: this.f.email.value,
            username: this.f.email.value,
            password: this.f.password.value,
            phone: this.f.phone.value,
            gender: this.f.gender.value,
            type: this.f.type.value
        };

        
        this.loading = true;
        this.userService.register(formData)
            .pipe(first())
            .subscribe(
                data => {
                    console.log("regiTSSS");
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    console.log("User already exist");
                    this.registerError="User Already Exist ";
                    this.alertService.error(error);
                    this.loading = false;
                });

            
    }
}
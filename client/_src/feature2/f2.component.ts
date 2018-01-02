import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { ValidationService } from '../_common/components/validation//validation.service';
import { MessageService, EventType } from '../_common/services/message.service';




@Component({
  selector: 'feature2',
  templateUrl: './f2.component.html',
  styleUrls: ['./f2.component.css']
})
export class f2Component implements OnInit {

  public sampleForm: FormGroup;
  public event: EventType

  constructor(
    // params
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService

  ) {
    // body

  }

  public ngOnInit() {
    this.createForm();
  }

  protected createForm() {
    this.sampleForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', Validators.required],
      passwordGroup: this.fb.group({
        password: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
        confirmPassword: ['', Validators.required],
      }, { validator: ValidationService.fieldMatcher("password", "confirmPassword") })

    });

    //this.sampleForm.get("firstName");

  }

  protected onSubmit() {
    console.log("on submit clicked");
    // if (this.sampleForm.dirty && this.sampleForm.valid) {
    //   // build object from form if desirable
    //   console.log("form is valid");


    // }
      this.messageService.publish(EventType.loading)
      setTimeout(() => {
        this.messageService.publish(EventType.loaded)
      }, 3000)


  }
}






// @Component({
//   selector: 'SignIn',
//   templateUrl: './signin.component.html',
//   styleUrls: ['./signin.component.css']
// })
// export class SignInComponent implements OnDestroy{ 

//     public signInForm: FormGroup;
//     public userCredentials: IUserCredentials;

//     constructor(private route: ActivatedRoute,
//                 private fb: FormBuilder,
//                 private signInService: SignInService,
//                 private router: Router) {
//         this.signInForm = this.fb.group({
//             userName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]],
//             password: ['', [Validators.required]]
//         });

//     } 

//     protected onSubmit() {
//         this.signInService.signIn(this.signInForm.value).share().subscribe((body: string) => {
//             sessionStorage.setItem('userId', body);
//             this.router.navigate(["/User"]);
//         }, (error) => { });
//     }

//     public ngOnDestroy() {
//         console.log('destroy method called');
//     }

// }

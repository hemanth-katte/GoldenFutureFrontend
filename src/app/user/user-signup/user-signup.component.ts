import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user-service'; // Import your user service
import { User } from '../../models/User';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  userForm: FormGroup;
  selectedProduct: number | null = null;
  userCreationSuccess = false;
  url: string | ArrayBuffer | null | undefined;
  paymentScreenshot!: File;
  sponsorIdDisabled: boolean = false;
  showError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.formBuilder.group({
      sponsorId: new FormControl({
        value: '',
        disabled: this.isSponsorIdDisabled(),
      }),
      firstname: new FormControl('', [Validators.required,Validators.maxLength(20),Validators.pattern(/^[A-Za-z]+$/)]),
      lastname: new FormControl('',Validators.maxLength(20)),
      aadhar: new FormControl('', [Validators.required, Validators.pattern(/^\d{12}$/)]),
      pan: new FormControl('', [Validators.required,Validators.pattern(/^[A-Z]{5}[0-9]{4}[A-Z]$/)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl(''),
      upiid: new FormControl('', [Validators.required,Validators.pattern(/^[A-Za-z0-9._-]+@[A-Za-z]+$/)]),
      deliveryType: new FormControl('',Validators.required),
      password: new FormControl('', [Validators.required,Validators.maxLength(20)]),
      productGroup: this.formBuilder.group({
        productId: new FormControl(''),
      }),
      screenshot: new FormControl('',Validators.required),
      transcationNumber: new FormControl('',Validators.required),
    });
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const referenceId = params['refId'];
      this.sponsorIdDisabled = !!referenceId; // Disable if referenceId is present
      if (referenceId) {
        this.userForm.patchValue({ sponsorId: referenceId });
        this.userForm.get('sponsorId')?.disable();
      }
    });
  }

  selectProduct(productId: number) {
    this.selectedProduct = productId;
  }

  handleRadioClick(event: Event, productId: number) {
    event.stopPropagation();
    this.selectedProduct = productId;
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.paymentScreenshot = file;
  }

  onUserSignUpFormSubmit() {
    if (this.userForm.valid) {
      const formData = new FormData();

      // Append the fields to the FormData
      formData.append('sponsorId', this.userForm.controls['sponsorId'].value);
      formData.append('firstname', this.userForm.controls['firstname']!.value);
      formData.append('lastname', this.userForm.controls['lastname']!.value);
      formData.append('aadhar', this.userForm.controls['aadhar']!.value);
      formData.append('pan', this.userForm.controls['pan']!.value);
      formData.append('phone', this.userForm.controls['phone']!.value);
      formData.append('email', this.userForm.controls['email']!.value);
      formData.append('address', this.userForm.controls['address']!.value);
      formData.append('userUPI', this.userForm.controls['upiid']!.value);
      formData.append(
        'shipmentType',
        this.userForm.controls['deliveryType']!.value
      );
      formData.append('password', this.userForm.controls['password']!.value);
      formData.append('productId', `${this.selectedProduct}`);

      // Append the paymentScreenshot file
      formData.append('paymentScreenshot', this.paymentScreenshot);

      formData.append(
        'paymentTransactionId',
        this.userForm.controls['transcationNumber']!.value
      );

      // Send the user data to your user service for further processing
      const subscription = this.userService.createUser(formData).subscribe({
        next: (response) => {
          if (response.userData == null) {
            this.router.navigate(['/login']);
            alert(`${response.message}`);
          } else {
            this.userCreationSuccess = true;
            localStorage.setItem('userEmail', response.userData.email);
            this.router.navigate(['/userEnterotp']);
            console.log('User created successfully', response);
          }
        },
        error: (error) => {
          alert(error.error.errorMessage);
          console.error('Error creating user', error);
          console.log(error);
        },
        complete: () => {
          // Handle completion if needed
        },
      });
    }
  }

  private isSponsorIdDisabled(): boolean {
    return this.sponsorIdDisabled;
  }
}

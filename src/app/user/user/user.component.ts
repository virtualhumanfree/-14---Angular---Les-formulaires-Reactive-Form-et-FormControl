import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = {};
  adresse = {};

  username = new FormControl('');
  email = new FormControl('');
  mdp = new FormControl('');
  street = new FormControl('');
  city = new FormControl('');
  zip = new FormControl('');

  // profilUser = new FormGroup ({
  // username: new FormControl(''),
  // email: new FormControl(''),
  // mdp: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

constructor() { }

ngOnInit() {
  }

// onSubmit() {
//     // TODO: Use EventEmitter with form value
//     console.warn(this.profilUser.value );
//   }

changeUsername() {
  this.user = {
    username: this.username.value,
    email: this.email.value,
    mdp: this.mdp.value,
    street: this.street.value,
    city: this.city.value,
    zip: this.zip.value
  };

  }
}

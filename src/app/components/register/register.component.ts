import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser= new User();
  constructor(private registerService : RegisterService,private router : Router ){ }

  ngOnInit(): void {
   
  }

  register(){
  
    this.registerService.register(this.newUser).subscribe(
      user => {console.log(user); // just pour afficher dans le console
    this.router.navigate(['login']);
    });
    }
  }
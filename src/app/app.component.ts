import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit{
  title = 'booking';

  constructor (public authService: AuthService,private router : Router) {}
  
  ngOnInit(): void {
    this.authService.loadToken();
    if (this.authService.getToken()==null ||
    this.authService.isTokenExpired())
    this.router.navigate(['/login']);

    this.toggleDarkTheme();
  }
  

  public onLogout(){
    this.authService.logout();
  }

  toggleDarkTheme(): void {
    var theme = localStorage.getItem('data-theme');
    if (theme === 'dark'){
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('data-theme','light');
    }else if (theme == null || theme === 'light' ) {
      document.body.classList.remove('dark-mode');
    }
    
    if (theme === null) {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('data-theme','dark');
    }  

    if (theme === 'light') {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('data-theme','dark');
    }  

   
    }
  
   
  
   
     
    
 }


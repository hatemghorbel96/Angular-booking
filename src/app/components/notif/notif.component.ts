import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notif } from 'src/app/model/notif';
import { AuthService } from 'src/app/services/auth.service';
import { NotifserviceService } from 'src/app/services/notifservice.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {
  notifs!:Notif[] ;
  notifsUser!:Notif[];
  notifnotreaded:any;
  notifnotreadedUser:any;
  constructor (public authService: AuthService,private router : Router,private notifservice: NotifserviceService,private socket: SocketService) {
    this.notif();
  }

  ngOnInit(): void {

    
    this.socket.subscribe('/topic/new', (): void => {
      this.notif();
      
    });
   
  }

  notif(){
    if ((this.authService.isAdmin())){
      this.notifservice.getall().subscribe(
        data => {this.notifs=data;
          this.notifs.filter(notif => notif.admin==0)
          this.notifs.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
          this.notifnotreaded=this.notifs.filter(notif => notif.readed==0 && notif.admin==0).length
        }
        
      )
    } else{
      this.notifservice.getbyusername().subscribe(
        data => {this.notifsUser=data;
          this.notifsUser.filter(notif => notif.admin==1)
          this.notifsUser.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
          this.notifnotreadedUser=this.notifsUser.filter(notif => notif.readed==0 && notif.admin==1).length
        }
        
      )
    } 

   
     /*  this.notifservice.getall().subscribe(
        data => {this.notifs=data;
          this.notifs.filter(notif => notif.admin==0)
          this.notifs.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
          this.notifnotreaded=this.notifs.filter(notif => notif.readed==0).length
        }
        
      )
  
      this.notifservice.getbyusername().subscribe(
        data => {this.notifsUser=data;
          this.notifsUser.filter(notif => notif.admin==1)
          this.notifsUser.sort((a, b) => new Date(b.dateCreation).getTime() - new Date(a.dateCreation).getTime());
          this.notifnotreadedUser=this.notifsUser.filter(notif => notif.readed==0).length
        }
        
      ) */
   
  }

  markshowed(notId:number) {
    
    this.notifservice.showed(notId).subscribe(
      
      s => {console.log(s);
        this.notif();
      })
      this.notif();
    }

 

}

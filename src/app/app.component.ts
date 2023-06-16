import { Component} from '@angular/core';
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  public identity:any;
  private checkIdentity;
  constructor(
    private _userService:UserService
  ){
    this.checkIdentity=setInterval(()=>{
      this.identity=this._userService.getIdentity();
    },1000);
  }   
  
  
}

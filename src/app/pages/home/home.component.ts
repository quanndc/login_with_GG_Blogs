import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from 'src/app/Models/new.model';
import { NewService } from 'src/app/services/new.service';
import { NavbarComponent } from 'src/app/components/navbar/navbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news$: Observable<New[]> = this.newService.get();
  constructor(private newService: NewService, private router: Router) { }

  navigateTo(link: string){
    this.router.navigate([link])
  }

  ngOnInit(): void {
  }

}

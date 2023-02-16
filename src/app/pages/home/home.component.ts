import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { New } from 'src/app/Models/new.model';
import { NewService } from 'src/app/services/new.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news$: Observable<New[]> = this.newService.get();
  constructor(private newService: NewService) { }

  ngOnInit(): void {
  }

}

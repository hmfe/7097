import { Component, OnInit } from '@angular/core';
import {SearchServiceService} from '../search-component/Shared/search-service.service';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css'],
  providers : [SearchServiceService]
})
export class SearchComponentComponent implements OnInit {

  wordsList$: Observable<any[]>;
  startAt: BehaviorSubject<string|null> = new BehaviorSubject("");
  
  constructor(private wordsSvc : SearchServiceService) { }

  ngOnInit() {
    this.wordsList$ = this.wordsSvc.getWords(this.startAt);
  }
  search(searchText) {
    this.startAt.next(searchText);
  }

}

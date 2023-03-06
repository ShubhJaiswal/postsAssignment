import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.scss']
})
export class SearchPostComponent implements OnInit {

  @Output() search = new EventEmitter<string>();
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  clearSearch() {
    this.searchTerm = '';
    this.search.emit('');
  }


  onSearch(event: any) {
    this.search.emit(event?.target?.value);
  }

}

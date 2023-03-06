import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchPostComponent } from './search-post.component';

fdescribe('SearchPostComponent', () => {
  let component: SearchPostComponent;
  let fixture: ComponentFixture<SearchPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clear search term', () => {
    component.searchTerm = 'test';
    component.clearSearch();
    expect(component.searchTerm).toEqual('');
  });

  it('should emit search term', () => {
    spyOn(component.search, 'emit');
    component.onSearch({ target: { value: 'search term' } });
    expect(component.search.emit).toHaveBeenCalledWith('search term');
  });
});

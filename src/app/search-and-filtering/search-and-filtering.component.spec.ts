import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndFilteringComponent } from './search-and-filtering.component';

describe('SearchAndFilteringComponent', () => {
  let component: SearchAndFilteringComponent;
  let fixture: ComponentFixture<SearchAndFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAndFilteringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchAndFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

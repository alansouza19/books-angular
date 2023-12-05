import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateBooksComponent } from './create-update-books.component';

describe('CreateUpdateBooksComponent', () => {
  let component: CreateUpdateBooksComponent;
  let fixture: ComponentFixture<CreateUpdateBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateUpdateBooksComponent]
    });
    fixture = TestBed.createComponent(CreateUpdateBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

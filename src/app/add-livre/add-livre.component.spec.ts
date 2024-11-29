import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLivreComponent } from './add-livre.component';

describe('AddLivreComponent', () => {
  let component: AddLivreComponent;
  let fixture: ComponentFixture<AddLivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLivreComponent]
    });
    fixture = TestBed.createComponent(AddLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

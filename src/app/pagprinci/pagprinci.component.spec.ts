import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagprinciComponent } from './pagprinci.component';

describe('PagprinciComponent', () => {
  let component: PagprinciComponent;
  let fixture: ComponentFixture<PagprinciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagprinciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagprinciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

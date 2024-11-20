import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagtareaComponent } from './pagtarea.component';

describe('PagtareaComponent', () => {
  let component: PagtareaComponent;
  let fixture: ComponentFixture<PagtareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagtareaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagtareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

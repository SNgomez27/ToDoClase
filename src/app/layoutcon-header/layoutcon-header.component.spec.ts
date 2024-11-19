import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutconHeaderComponent } from './layoutcon-header.component';

describe('LayoutconHeaderComponent', () => {
  let component: LayoutconHeaderComponent;
  let fixture: ComponentFixture<LayoutconHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LayoutconHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutconHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

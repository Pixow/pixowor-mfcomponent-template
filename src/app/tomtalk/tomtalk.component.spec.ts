import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomtalkComponent } from './tomtalk.component';

describe('TomtalkComponent', () => {
  let component: TomtalkComponent;
  let fixture: ComponentFixture<TomtalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomtalkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomtalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

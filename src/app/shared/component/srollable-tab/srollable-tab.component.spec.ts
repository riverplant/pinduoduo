import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrollableTabComponent } from './srollable-tab.component';

describe('SrollableTabComponent', () => {
  let component: SrollableTabComponent;
  let fixture: ComponentFixture<SrollableTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrollableTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrollableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

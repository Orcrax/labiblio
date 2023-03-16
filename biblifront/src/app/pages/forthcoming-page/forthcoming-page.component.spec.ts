import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthcomingPageComponent } from './forthcoming-page.component';

describe('ForthcomingPageComponent', () => {
  let component: ForthcomingPageComponent;
  let fixture: ComponentFixture<ForthcomingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthcomingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForthcomingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

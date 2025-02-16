import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsePageComponent } from './sse-page.component';

describe('SsePageComponent', () => {
  let component: SsePageComponent;
  let fixture: ComponentFixture<SsePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsePageComponent]
    });
    fixture = TestBed.createComponent(SsePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

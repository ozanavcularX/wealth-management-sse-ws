import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsPageComponent } from './ws-page.component';

describe('WsPageComponent', () => {
  let component: WsPageComponent;
  let fixture: ComponentFixture<WsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WsPageComponent]
    });
    fixture = TestBed.createComponent(WsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteAccountComponent } from './registe-account.component';

describe('RegisteAccountComponent', () => {
  let component: RegisteAccountComponent;
  let fixture: ComponentFixture<RegisteAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPhonePageComponent } from './sign-in-phone-page.component';

describe('SignInPhonePageComponent', () => {
  let component: SignInPhonePageComponent;
  let fixture: ComponentFixture<SignInPhonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPhonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPhonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubComponent } from './addsub.component';

describe('AddsubComponent', () => {
  let component: AddsubComponent;
  let fixture: ComponentFixture<AddsubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstorageServiceComponent } from './localstorage-service.component';

describe('LocalstorageServiceComponent', () => {
  let component: LocalstorageServiceComponent;
  let fixture: ComponentFixture<LocalstorageServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstorageServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

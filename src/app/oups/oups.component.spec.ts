import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OupsComponent } from './oups.component';

describe('OupsComponent', () => {
  let component: OupsComponent;
  let fixture: ComponentFixture<OupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

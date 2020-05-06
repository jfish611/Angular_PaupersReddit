import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePostViewerComponent } from './single-post-viewer.component';

describe('SinglePostViewerComponent', () => {
  let component: SinglePostViewerComponent;
  let fixture: ComponentFixture<SinglePostViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePostViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePostViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

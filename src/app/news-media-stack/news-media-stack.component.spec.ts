import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMediaStackComponent } from './news-media-stack.component';

describe('NewsMediaStackComponent', () => {
  let component: NewsMediaStackComponent;
  let fixture: ComponentFixture<NewsMediaStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsMediaStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsMediaStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

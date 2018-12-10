import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerTabComponent } from './banner-tab.component';

describe('BannerTabComponent', () => {
  let component: BannerTabComponent;
  let fixture: ComponentFixture<BannerTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

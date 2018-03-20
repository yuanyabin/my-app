import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUserListComponent } from './recent-user-list.component';

describe('RecentUserListComponent', () => {
  let component: RecentUserListComponent;
  let fixture: ComponentFixture<RecentUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPartitionsComponent } from './list-partitions.component';

describe('ListPartitionsComponent', () => {
  let component: ListPartitionsComponent;
  let fixture: ComponentFixture<ListPartitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPartitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPartitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

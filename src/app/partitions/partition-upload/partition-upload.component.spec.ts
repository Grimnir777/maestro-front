import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartitionUploadComponent } from './partition-upload.component';

describe('PartitionUploadComponent', () => {
  let component: PartitionUploadComponent;
  let fixture: ComponentFixture<PartitionUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartitionUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartitionUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

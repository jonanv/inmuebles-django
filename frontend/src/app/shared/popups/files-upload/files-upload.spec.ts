import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUpload } from './files-upload';

describe('FilesUpload', () => {
  let component: FilesUpload;
  let fixture: ComponentFixture<FilesUpload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilesUpload],
    }).compileComponents();

    fixture = TestBed.createComponent(FilesUpload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

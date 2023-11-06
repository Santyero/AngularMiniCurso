import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleGenericTableComponent } from './simple-generic-table.component';

describe('SimpleGenericTableComponent', () => {
  let component: SimpleGenericTableComponent;
  let fixture: ComponentFixture<SimpleGenericTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleGenericTableComponent]
    });
    fixture = TestBed.createComponent(SimpleGenericTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

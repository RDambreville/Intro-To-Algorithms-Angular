import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBlackTreeComponent } from './red-black-tree.component';

describe('RedBlackTreeComponent', () => {
  let component: RedBlackTreeComponent;
  let fixture: ComponentFixture<RedBlackTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBlackTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBlackTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

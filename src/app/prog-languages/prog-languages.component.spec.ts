import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgLanguagesComponent } from './prog-languages.component';

describe('ProgLanguagesComponent', () => {
  let component: ProgLanguagesComponent;
  let fixture: ComponentFixture<ProgLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgLanguagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

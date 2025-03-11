import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranDiaComponent } from './gran-dia.component';

describe('GranDiaComponent', () => {
  let component: GranDiaComponent;
  let fixture: ComponentFixture<GranDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GranDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GranDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

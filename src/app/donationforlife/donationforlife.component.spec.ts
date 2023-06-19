import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationforlifeComponent } from './donationforlife.component';

describe('DonationforlifeComponent', () => {
  let component: DonationforlifeComponent;
  let fixture: ComponentFixture<DonationforlifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationforlifeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationforlifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

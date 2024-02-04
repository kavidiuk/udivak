import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostazioniprofiloComponent } from './impostazioniprofilo.component';

describe('ImpostazioniprofiloComponent', () => {
  let component: ImpostazioniprofiloComponent;
  let fixture: ComponentFixture<ImpostazioniprofiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpostazioniprofiloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpostazioniprofiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

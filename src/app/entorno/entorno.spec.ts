import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Entorno } from './entorno';

describe('Entorno', () => {
  let component: Entorno;
  let fixture: ComponentFixture<Entorno>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entorno],
    }).compileComponents();

    fixture = TestBed.createComponent(Entorno);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show the environment message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent?.trim()).toBeTruthy();
  });
});

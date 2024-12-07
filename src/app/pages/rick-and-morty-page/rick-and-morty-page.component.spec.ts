import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickAndMortyPageComponent } from './rick-and-morty-page.component';

describe('RickAndMortyPageComponent', () => {
  let component: RickAndMortyPageComponent;
  let fixture: ComponentFixture<RickAndMortyPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RickAndMortyPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickAndMortyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

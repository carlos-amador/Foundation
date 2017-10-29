import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppCommonModule } from'../_common/common.module';


describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ 
      declarations: [AppComponent],
      imports: [RouterTestingModule, AppCommonModule]
    });
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
  });
});

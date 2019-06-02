import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});

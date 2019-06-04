import { TestBed } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { UsersService } from "./users.service";

describe("UsersService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [HttpClient],
      imports: [HttpClientModule]
    })
  );

  it("should be created", () => {
    const service: UsersService = TestBed.get(UsersService);
    expect(service).toBeTruthy();
  });
});

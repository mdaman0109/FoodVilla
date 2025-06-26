import { expect } from "vitest"
import { sum } from "../sum"
test("Dummy Test",()=>
{
    const add = sum(3,4);
    expect(add).toBe(7);
    
})
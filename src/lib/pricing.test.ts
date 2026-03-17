import { describe, it, expect } from "vitest";
import { calculatePrice, PRICING } from "./pricing";

describe("calculatePrice", () => {
  it("vrací nástupní sazbu 50 Kč při 0 km", () => {
    const r = calculatePrice(0);
    expect(r.startFee).toBe(50);
    expect(r.segment1).toBe(0);
    expect(r.segment2).toBe(0);
    expect(r.segment3).toBe(0);
    expect(r.totalCzk).toBe(50);
    expect(r.distanceKm).toBe(0);
  });

  it("počítá do 15 km správně (35 Kč/km)", () => {
    const r = calculatePrice(10);
    expect(r.startFee).toBe(50);
    expect(r.segment1).toBe(10 * PRICING.perKmUpTo15); // 350
    expect(r.segment2).toBe(0);
    expect(r.segment3).toBe(0);
    expect(r.totalCzk).toBe(50 + 350);
  });

  it("přesně 15 km: pouze segment 1", () => {
    const r = calculatePrice(15);
    expect(r.segment1).toBe(15 * PRICING.perKmUpTo15); // 525
    expect(r.segment2).toBe(0);
    expect(r.segment3).toBe(0);
    expect(r.totalCzk).toBe(50 + 525);
  });

  it("15–30 km: segment 1 + segment 2 (29 Kč/km)", () => {
    const r = calculatePrice(25);
    expect(r.segment1).toBe(15 * PRICING.perKmUpTo15); // 525
    expect(r.segment2).toBe(10 * PRICING.perKm15To30);  // 290
    expect(r.segment3).toBe(0);
    expect(r.totalCzk).toBe(50 + 525 + 290);
  });

  it("přesně 30 km: segment 1 + segment 2", () => {
    const r = calculatePrice(30);
    expect(r.segment1).toBe(15 * PRICING.perKmUpTo15);
    expect(r.segment2).toBe(15 * PRICING.perKm15To30);
    expect(r.segment3).toBe(0);
    expect(r.totalCzk).toBe(50 + 525 + 435);
  });

  it("nad 30 km: všechny tři segmenty (25 Kč/km)", () => {
    const r = calculatePrice(40);
    expect(r.segment1).toBe(15 * PRICING.perKmUpTo15);  // 525
    expect(r.segment2).toBe(15 * PRICING.perKm15To30); // 435
    expect(r.segment3).toBe(10 * PRICING.perKmOver30);  // 250
    expect(r.totalCzk).toBe(50 + 525 + 435 + 250);
  });

  it("zaokrouhluje celkovou cenu na celé Kč", () => {
    const r = calculatePrice(1.5);
    const raw = 50 + 1.5 * PRICING.perKmUpTo15; // 50 + 52.5 = 102.5
    expect(r.totalCzk).toBe(Math.round(raw));
  });

  it("záporná vzdálenost se chová jako 0", () => {
    const r = calculatePrice(-5);
    expect(r.distanceKm).toBe(0);
    expect(r.totalCzk).toBe(50);
  });
});

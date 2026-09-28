import Link from "next/link";
import { residentialBands } from "@/content/pricing";
import { residentialCfaForKw } from "@/content/subsidy";
import { inr } from "@/lib/format";
import { VerifyNote } from "@/components/content/answer-block";

export function PriceTable({ city }: { city?: string }) {
  return (
    <div>
      <div className="overflow-x-auto rounded-2xl border bg-card">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-navy text-white">
            <tr>
              <th className="px-4 py-3 font-medium">Size</th>
              <th className="px-4 py-3 font-medium">Gross (indicative)</th>
              <th className="px-4 py-3 font-medium">CFA if eligible</th>
              <th className="px-4 py-3 font-medium">Net after CFA</th>
              <th className="px-4 py-3 font-medium">Roof (approx.)</th>
            </tr>
          </thead>
          <tbody>
            {residentialBands.map((row) => {
              const cfa = residentialCfaForKw(row.kw);
              return (
                <tr key={row.kw} className="border-t">
                  <td className="px-4 py-3 font-medium text-navy">
                    {row.kw} kW
                    {city && (row.kw === 3 || row.kw === 5 || row.kw === 10) ? (
                      <div>
                        <Link
                          className="text-xs font-normal text-muted-foreground underline"
                          href={`/${row.kw}kw-solar-system-in-${city}`}
                        >
                          {row.kw} kW in {city}
                        </Link>
                      </div>
                    ) : null}
                  </td>
                  <td className="px-4 py-3">
                    {inr(row.grossMin)} – {inr(row.grossMax)}
                  </td>
                  <td className="px-4 py-3">Up to {inr(cfa)}</td>
                  <td className="px-4 py-3">
                    {inr(row.grossMin - cfa)} – {inr(row.grossMax - cfa)}
                  </td>
                  <td className="px-4 py-3">~{row.roofSqm} m²</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <VerifyNote>
          Residential on-grid planning ranges for a standard RCC roof, {new Date().getFullYear()} market. CFA is the current PM
          Surya Ghar table (max ₹78,000 at 3 kW+). Commercial/industrial connections do not use this CFA column. Not a quotation.
        </VerifyNote>
      </div>
    </div>
  );
}

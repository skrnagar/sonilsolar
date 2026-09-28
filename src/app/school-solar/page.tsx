import type { Metadata } from "next";
import { getService } from "@/content/services";
import { ServiceLanding, serviceMetadata } from "@/components/pages/service-landing";
import { notFound } from "next/navigation";

const service = getService("school-solar");

export const metadata: Metadata = service ? serviceMetadata(service) : {};

export default function Page() {
  if (!service) notFound();
  return <ServiceLanding service={service} />;
}

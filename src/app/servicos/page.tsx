import { pageSEO } from "@/lib/metadata";
import ServicesPageContent from "@/components/services-page-content";

export const metadata = pageSEO.services;

export default function ServicesPage() {
  return <ServicesPageContent />;
}
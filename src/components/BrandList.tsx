import BrandCard from "./BrandCard";
import { ApiPageBrand } from "@/lib/mockDev";

interface BrandListProps {
  partners: ApiPageBrand[];
  isMobile: boolean;
}

const BrandList = ({ partners, isMobile }: BrandListProps) => {
  const sortedPartners = [...partners].sort((a, b) => (a.order || 999) - (b.order || 999));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col">
        {sortedPartners.map((partner, index) => (
          <BrandCard
            key={partner.id}
            partner={partner}
            order={index + 1}
            isMobile={isMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandList;

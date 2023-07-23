import { Loading } from "@/components/Loading";
import { Pricelist } from "@/interfaces/pricelist";
import { getPricelist } from "@/services/pricelist";
import { useState } from "react";
import { useAsyncEffect } from "use-async-effect";
export const GetingPricelist = () => {
  const [pricelist, setPricelist] = useState<Pricelist[]>([]);
  const [loading, setIsloading] = useState(false);

  const fetchPricelist = async () => {
    try {
      setIsloading(true);
      const { result } = await getPricelist();
      setPricelist(result);
      setIsloading(false);
    } catch (err: unknown) {
      setIsloading(false);
      throw Error("Failed to get Pricelist Data", err as Error);
    }
  };

  useAsyncEffect(() => {
    fetchPricelist();
  }, []);

  return (
    <div>
      {!loading && (
        <div>
          {pricelist.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
      {loading && <Loading isLoaded={false} />}
    </div>
  );
};

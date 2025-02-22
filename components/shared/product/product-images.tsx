"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="spae-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      ></Image>

      <div className="flex hover:border-orange-600">
        {images.map((img, index) => (
          <div
            key={img}
            onClick={() => setCurrent(index)}
            className={cn("cursor-pointer mr-2 hover:border-orange-600")}
          >
            <Image
              src={img}
              alt="image"
              width={100}
              height={100}
              className="min-h-[100px] object-cover object-center"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;

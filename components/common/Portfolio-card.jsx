import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const PortfolioCard = ({ image, alt, title, summary, slug }) => {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-96 w-full">
          <Image
            className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            src={image}
            alt={alt}
            width={400}
            height={400}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
        </div>
      </CardHeader>
      <CardContent className="absolute inset-2 flex translate-y-[55%] flex-col items-center  text-center transition-all duration-500 group-hover:translate-y-0">
        <div className="flex h-full flex-col items-center justify-center">
          <h4 className="pb-0  font-semi-bold">{title}</h4>
          <p className="mb-0  italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {summary}
          </p>
        </div>
      </CardContent>
      <CardFooter className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Link href={`/portfolio/${slug}`}>
          <Button className="bg-primary text-white py-3 px-6 rounded-full shadow-md hover:bg-primary/80 transition-colours">
            See More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

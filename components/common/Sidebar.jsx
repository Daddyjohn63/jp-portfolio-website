import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BlogCategories } from '../blog/Categories';

export const Sidebar = () => {
  return (
    <Card className=" border-2 border-customShades-shade3">
      <CardHeader>
        <CardTitle>
          <h2 className="text-3xl font-semi-bold">Contact me</h2>
        </CardTitle>
        <CardDescription>Use which ever method you prefer.</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <p className="font-bold">Phone:</p>
        <Link
          href="tel:07739875445"
          className="hover:underline hover:underline-offset-4"
        >
          07739 875445
        </Link>
        <p className="font-bold">Email:</p>
        <Link
          href="mailto:john@webandprosper.co.uk"
          className="hover:underline hover:underline-offset-4"
        >
          john@webandprosper.co.uk
        </Link>
      </CardContent>
      {/* <CardFooter>
        <Button>Use The Contact Form</Button>
      </CardFooter> */}
    </Card>
  );
};

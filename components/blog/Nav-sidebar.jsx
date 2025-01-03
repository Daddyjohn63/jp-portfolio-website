import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Link from 'next/link';
import { getBlogCategories } from '@/lib/blog';
import { Suspense } from 'react';
import LoadingState from '@/components/common/Loading-state';

const Categories = async () => {
  const categories = await getBlogCategories();

  if (!categories?.length) {
    return <p>No categories found</p>;
  }

  return (
    <ul className="flex flex-col gap-2">
      {categories.map(category => {
        // Skip invalid category entries
        if (!category?.slug || !category?.title) {
          return null;
        }

        return (
          <li key={category.slug}>
            <Link
              href={`/category/${category.slug}`}
              className="hover:text-primary transition-colors"
            >
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export const NavSidebar = () => {
  return (
    <Card className="border-2 border-customShades-shade2">
      <CardHeader>
        <CardTitle>
          <h2 className="text-3xl font-bold">Categories</h2>
        </CardTitle>
        <CardDescription>View posts by category.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Suspense fallback={<LoadingState />}>
          <Categories />
        </Suspense>
      </CardContent>
    </Card>
  );
};

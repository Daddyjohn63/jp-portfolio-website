'use client';
import { Button } from '@/components/ui/button';
// import { Calendar } from '@/components/ui/calendar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
// import { format } from 'date-fns';
import {
  CalendarIcon,
  PersonStandingIcon,
  ShieldCloseIcon,
  SidebarCloseIcon,
  X
} from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { useRouter } from 'next/navigation';
import { Close, PopoverClose } from '@radix-ui/react-popover';
import { toast } from 'sonner';
import { useState } from 'react';
import Image from 'next/image';
import { Separator } from '../ui/separator';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  companyName: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address.' }),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' }),
  agreeToTerms: z.boolean().refine(data => data === true, {
    message: 'You must agree to the terms and conditions.'
  })
});

export default function ContactForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      companyName: '',
      phoneNumber: '',
      email: '',
      message: '',
      agreeToTerms: false
    }
  });

  const handleSubmit = async values => {
    try {
      setIsLoading(true);
      console.log('values', values);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log('response', response);

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      toast.success('Form submitted successfully!');

      // Reset form state completely
      form.reset(
        {
          name: '',
          companyName: '',
          phoneNumber: '',
          email: '',
          message: '',
          agreeToTerms: false
        },
        {
          keepErrors: false, // Don't keep errors
          keepDirty: false, // Reset dirty state
          keepIsSubmitted: false, // Reset submission state
          keepTouched: false, // Reset touched state
          keepIsValid: false, // Reset validation state
          keepValues: false // Don't keep values
        }
      );

      // Clear all form errors
      form.clearErrors();

      // Unregister all fields
      Object.keys(form.getValues()).forEach(key => {
        form.unregister(key);
      });
    } catch (error) {
      console.error('Submission error:', error);
      setIsError(true);
      toast.error('Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Card className="container mt-6 max-w-md ">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Contact us for a free consultation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                className="flex flex-col gap-4"
                onSubmit={form.handleSubmit(handleSubmit)}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="companyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Company Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="email@example.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="123-456-7890" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Input placeholder="Message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="agreeToTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel>Agree to Privacy Policy </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? 'Submitting...' : 'Submit'}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

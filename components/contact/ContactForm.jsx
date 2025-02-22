'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { toast } from 'sonner';
import { useState } from 'react';
import { sanitizeUserInput } from '@/util/sanitize';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters.' })
    .transform(val => sanitizeUserInput(val)),
  username: z.string().length(0, { message: 'Nice try, bot!' }),
  companyName: z
    .string()
    .optional()
    .transform(val => (val ? sanitizeUserInput(val) : val)),
  phoneNumber: z
    .string()
    .optional()
    .transform(val => (val ? sanitizeUserInput(val) : val)),
  email: z
    .string()
    .email({ message: 'Invalid email address.' })
    .transform(val => sanitizeUserInput(val)),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .transform(val => sanitizeUserInput(val)),
  agreeToTerms: z.boolean().refine(data => data === true, {
    message: 'You must agree to the terms and conditions.'
  })
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      username: '',
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
      setIsError(false);
      setIsSuccess(false);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      // Get the error response data
      const data = await response.json();

      if (response.status === 429) {
        throw new Error('Too many requests. Please wait before trying again.');
      }

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to submit form');
      }

      setIsSuccess(true);
      toast.success('Form submitted successfully!');

      // Reset form state completely
      form.reset(
        {
          name: '',
          username: '',
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
      console.error('Submission error details:', {
        message: error.message,
        stack: error.stack,
        name: error.name
      });
      setIsError(true);
      toast.error(error.message || 'Failed to submit form');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div>
        <Card className="container mt-6 max-w-md border-gray-700">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
            <CardDescription>
              Contact me for a free consultation
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
                  name="username"
                  className="border-gray-500"
                  render={({ field }) => (
                    <FormItem className={cn('!hidden', 'sr-only')}>
                      <FormControl>
                        <Input
                          {...field}
                          tabIndex={-1}
                          autoComplete="off"
                          aria-hidden="true"
                          className="!border-gray-500"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          {...field}
                          className="border-gray-500"
                        />
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
                        <Input
                          placeholder="Company Name"
                          {...field}
                          className="border-gray-500"
                        />
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
                          className="border-gray-500"
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
                        <Input
                          placeholder="020 1234 5678"
                          {...field}
                          className="border-gray-500"
                        />
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
                        <Input
                          placeholder="Message"
                          {...field}
                          className="border-gray-500"
                        />
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

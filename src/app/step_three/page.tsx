"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  ForwardIcon,
  InfoIcon,
} from "@/components/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { TimePickerDemo } from "@/components/ui/time-picker";

const Contact: React.FC = () => {
  const contactFormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone: z.string().min(10, "at least 10 characters"),
    address: z.string().min(3, "at least 3 characters"),
  });
  type Contact = z.infer<typeof contactFormSchema>;
  const router = useRouter();

  const stepThreeForm = useForm<Contact>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  function onSubmit(values: Contact) {
    // push to api
    // router.push("/step_four/");
  }
  return (
    <Form {...stepThreeForm}>
      <form
        onSubmit={stepThreeForm.handleSubmit(onSubmit)}
        className="space-y-8 rounded-lg bg-white p-6 shadow"
      >
        <div className="mx-auto max-w-3xl space-y-8 px-4">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <ChevronRightIcon className="h-6 w-6" />
              <h1 className="text-3xl font-bold tracking-tight">
                Book a Cleaning Service
              </h1>
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              Let&apos;s get started with booking your cleaning service. Please
              follow the steps to provide the necessary information.
            </p>
          </div>
          <div className="border-b border-t py-8">
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="grid gap-0.5">
                <h2 className="font-semibold">Contact Information</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enter your contact information
                </p>
              </div>
              <div className="col-span-3 grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <FormField
                      control={stepThreeForm.control}
                      name="first_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <FormField
                      control={stepThreeForm.control}
                      name="last_name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div>
                  <FormField
                    control={stepThreeForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={stepThreeForm.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your phone number"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={stepThreeForm.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Link
              className="flex gap-2 font-semibold underline underline-offset-2"
              href="/step_one/"
            >
              <ArrowLeftIcon className="h-4 w-4 -translate-x-1" />
              Back to Date & Time
            </Link>
            <Button className="ml-auto">
              Continue to Payment
              <ForwardIcon className="h-4 w-4 -translate-x-1" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Contact;

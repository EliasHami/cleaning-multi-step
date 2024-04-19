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

const Datetime: React.FC = () => {
  const datetimeFormSchema = z.object({
    value: z.date(),
  });
  type Datetime = z.infer<typeof datetimeFormSchema>;
  const router = useRouter();

  const stepTwoForm = useForm<Datetime>({
    resolver: zodResolver(datetimeFormSchema),
    mode: "onChange",
    defaultValues: {
      value: new Date(),
    },
  });

  function onSubmit(values: Datetime) {
    // push to api

    router.push("/step_three/");
  }
  return (
    <Form {...stepTwoForm}>
      <form
        onSubmit={stepTwoForm.handleSubmit(onSubmit)}
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
                <h2 className="font-semibold">Date & Time</h2>
              </div>
              <FormField
                control={stepTwoForm.control}
                name="value"
                render={({ field }) => (
                  <FormItem className="col-span-2 ml-10">
                    <FormLabel> Choose your preferred date and time</FormLabel>
                    <FormControl>
                      <Popover>
                        <FormControl>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-[280px] justify-start text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP HH:mm:ss")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                        </FormControl>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                          <div className="border-t border-border p-3">
                            <TimePickerDemo
                              setDate={field.onChange}
                              date={field.value}
                            />
                          </div>
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Link
              className="flex gap-2 font-semibold underline underline-offset-2"
              href="/step_one/"
            >
              <ArrowLeftIcon className="h-4 w-4 -translate-x-1" />
              Back to services
            </Link>
            <Button className="ml-auto">
              Continue to Contact Information
              <ForwardIcon className="h-4 w-4 -translate-x-1" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Datetime;

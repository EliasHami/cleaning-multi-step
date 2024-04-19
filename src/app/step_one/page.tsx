"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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

const Service: React.FC = () => {
  const serviceFormSchema = z.object({
    type: z.enum(["standard", "deep", "office"]),
    additional: z.string().min(3, "at least 3 characteres"),
  });
  type Service = z.infer<typeof serviceFormSchema>;
  const router = useRouter();

  const stepOneForm = useForm<Service>({
    resolver: zodResolver(serviceFormSchema),
    mode: "onChange",
    defaultValues: {
      type: "standard",
      additional: "",
    },
  });

  function onSubmit(values: Service) {
    // push to api

    router.push("/step_two/");
  }
  return (
    <Form {...stepOneForm}>
      <form
        onSubmit={stepOneForm.handleSubmit(onSubmit)}
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
                <h2 className="font-semibold">Service type</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Select the type of cleaning service
                </p>
              </div>
              <FormField
                control={stepOneForm.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center justify-between space-y-0">
                          <FormControl>
                            <RadioGroupItem value="standard" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Standard cleaning
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                className="h-6 w-6 rounded-full p-1"
                                size="icon"
                                variant="outline"
                              >
                                <InfoIcon className="h-4 w-4" />
                                <span className="sr-only">More info</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[20rem] p-4">
                              <p className="font-semibold">Standard cleaning</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Our standard cleaning service includes dusting,
                                vacuuming, and mopping to keep your home looking
                                fresh and tidy.
                              </p>
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0">
                          <FormControl>
                            <RadioGroupItem value="deep" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Deep cleaning
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                className="h-6 w-6 rounded-full p-1"
                                size="icon"
                                variant="outline"
                              >
                                <InfoIcon className="h-4 w-4" />
                                <span className="sr-only">More info</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[20rem] p-4">
                              <p className="font-semibold">Deep cleaning</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Our deep cleaning service provides a thorough
                                scrubbing of your home, tackling dirt and grime
                                in hard-to-reach areas.
                              </p>
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                        <FormItem className="flex items-center justify-between space-y-0">
                          <FormControl>
                            <RadioGroupItem value="office" />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Office cleaning
                          </FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <Button
                                className="h-6 w-6 rounded-full p-1"
                                size="icon"
                                variant="outline"
                              >
                                <InfoIcon className="h-4 w-4" />
                                <span className="sr-only">More info</span>
                              </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[20rem] p-4">
                              <p className="font-semibold">Office cleaning</p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                Let us keep your workspace spotless with our
                                office cleaning service, designed to create a
                                hygienic and comfortable environment for your
                                team.
                              </p>
                            </PopoverContent>
                          </Popover>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={stepOneForm.control}
                name="additional"
                render={({ field }) => (
                  <FormItem className="col-span-2 ml-10">
                    <FormLabel>Additional instructions</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter additional instructions"
                        className="resize-none"
                        {...field}
                      />
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
              href="#"
            >
              <ArrowLeftIcon className="h-4 w-4 -translate-x-1" />
              Back to home
            </Link>
            <Button type="submit" className="ml-auto">
              Continue to date and time
              <ForwardIcon className="h-4 w-4 -translate-x-1" />
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Service;

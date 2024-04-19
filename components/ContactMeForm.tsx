"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/lib/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  type: z.enum(["hire", "coffee", "mentorship"], {
    required_error: "You need to select a notification type.",
  }),
  message: z.string().min(2, {
    message: "Message must be at least 2 characters.",
  }),
});
const ContaceMeForm = () => {
  const [subject, setSubject] = useState("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    sendEmail(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <div className="grid grid-cols-2 gap-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Name:</FormLabel>
                <FormControl>
                  <Input placeholder="Name :" {...field} />
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
                <FormLabel>Your Email:</FormLabel>
                <FormControl>
                  <Input placeholder="Email :" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex  "
                >
                  <FormItem
                    className={twMerge(
                      "flex items-center justify-center space-x-3 space-y-0 border-[1px] border-grey-text rounded-sm pr-7 py-3 w-full cursor-pointer  duration-200 ",
                      subject === "hire" ? "bg-dark-indigo " : ""
                    )}
                    onClick={() => setSubject("hire")}
                  >
                    <FormControl>
                      <RadioGroupItem value="hire" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Hire Me
                    </FormLabel>
                  </FormItem>
                  <FormItem
                    className={twMerge(
                      "flex items-center justify-center space-x-3 space-y-0 border-[1px] border-grey-text rounded-sm pr-7 py-3 w-full cursor-pointer  duration-200 ",
                      subject === "coffee" ? "bg-dark-indigo " : ""
                    )}
                    onClick={() => setSubject("coffee")}
                  >
                    <FormControl>
                      <RadioGroupItem value="coffee" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      Coffee chat
                    </FormLabel>
                  </FormItem>
                  <FormItem
                    className={twMerge(
                      "flex items-center justify-center space-x-3 space-y-0 border-[1px] border-grey-text rounded-sm pr-7 py-3 w-full cursor-pointer  duration-200 ",
                      subject === "mentorship" ? "bg-dark-indigo " : ""
                    )}
                    onClick={() => setSubject("mentorship")}
                  >
                    <FormControl>
                      <RadioGroupItem value="mentorship" />
                    </FormControl>
                    <FormLabel className="font-normal cursor-pointer">
                      1:1 Mentorship
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
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
              <FormLabel>Your Comment:</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Send Message</Button>
      </form>
    </Form>
  );
};
export default ContaceMeForm;

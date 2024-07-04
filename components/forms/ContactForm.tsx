"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/schemas/contact-form-schema";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";

//  const Input = z.infer<typeof contactFormSchema>

export default function ContactForm() {
  const { toast } = useToast();

  const currentDate = new Date().toDateString();

  const form = useForm<ContactFormProps>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: "",
      date: currentDate,
      privacyCheck: false
    },
  });

  // function onSubmit(data: z.infer<typeof contactFormSchema>) {
  //   console.log(data)
  //   toast({
  //     title: "You submitted the following values:",
  //     description: (
  //       <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //         <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //       </pre>
  //     ),
  //   });
  // }
  async function onSubmit(data: z.infer<typeof contactFormSchema>) {
    console.log(data)
    try{
   await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data)
   })
  } catch (error){
    console.log(error)
  }
}

  // function onSubmit(data: ContactFormProps) {
  //   alert(JSON.stringify(data, null, 4));
  //   console.log(data);
  // }

  return (
    <>
      <div>Form</div>
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
          <CardDescription>Haz tu consulta o sugerencia</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
            >
              {/* name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your name..." {...field} />
                    </FormControl>
                    {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* surname */}
              <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your surname..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your phone..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email..." {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type your message here."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* accept privacy terms */}
              <FormField
                control={form.control}
                name="privacyCheck"
                render={({ field }) => (
                  <FormItem className="">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className=""
                      />
                    </FormControl>
                    <div className="">
                      <FormLabel>
                        I have readed and accept privacy terms
                      </FormLabel>
                      <FormDescription>
                        You can read in{" "}
                        <Link href="/privacy-terms" target="_blank">privacy terms</Link>{" "}
                        page.
                      </FormDescription>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
               
              <Button type="submit" className={cn({})}>
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* <Checkbox className="mx-auto" id="terms1" /> */}
    </>
  );
}

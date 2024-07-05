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
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/schemas/contact-form-schema";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Checkbox } from "../ui/checkbox";
import { InputField } from "../form-fields/input-field";
import { TextareaField } from "../form-fields/textarea-field";
import { CheckboxField } from "../form-fields/checkbox-field";

//  const Input = z.infer<typeof contactFormSchema>

export default function ContactFormUsable() {
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
      <Card className="mx-auto text-xl border-none">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
          <CardDescription>Haz tu consulta o sugerencia</CardDescription>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative space-y-3 overflow-x-hidden"
              noValidate
            >
              {/* name */}
              <InputField
                placeholder="Name*"
                name="name"
                />
               {/* surname */}
              <InputField
                placeholder="Surname*"
                name="surname"
                />
              {/* phone */}
              <InputField
                placeholder="Phone*"
                name="phone"
                />
              {/* email */}
              <InputField
                placeholder="Email*"
                name="email"
                />
              {/* message */}
              <TextareaField 
              placeholder="Message*"
              name="message"
              />
              {/* accept privacy terms */}
              <CheckboxField 
               name="privacyCheck"
               />
                <div>
                        I have readed and accept privacy terms
                      </div>
                      <div>
                        You can read in{" "}
                        <Link href="/privacy-terms" target="_blank">privacy terms</Link>{" "}
                        page.
                      </div>
              {/* <FormField
                control={form.control}
                name="privacyCheck"
                render={({ field }) => (
                  <FormItem className="">
                    <div>
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
                    </div>
                  </FormItem>
                )}
              /> */}
               
              <Button type="submit" className={cn({})}>
                Submit
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      {/* <Checkbox className="mx-auto" id="terms1" /> */}
    </>
  );
}

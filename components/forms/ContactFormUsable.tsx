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
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { contactFormSchema } from "@/schemas/contact-form-schema";
import { useToast } from "../ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { InputField } from "../form-fields/input-field";
import { TextareaField } from "../form-fields/textarea-field";
import { CheckboxField } from "../form-fields/checkbox-field";

//  const Input = z.infer<typeof contactFormSchema>

export default function ContactFormUsable() {
  const { toast } = useToast();

  const currentDate = new Date().toISOString();

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
      <div className="mx-auto text-xl border-none">
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
            
               
              <Button type="submit" className={cn({})}>
                Submit
              </Button>
            </form>
          </FormProvider>
       
      </div>
      {/* <Checkbox className="mx-auto" id="terms1" /> */}
    </>
  );
}

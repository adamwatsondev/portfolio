"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const schema = z.object({
  name: z.string().regex(/^[a-zA-Z-]+$/, "Only letters and hyphen allowed."),
  surname: z.string().regex(/^[a-zA-Z-]+$/, "Only letters and hyphen allowed."),
  email: z.string().email("Please enter a valid email."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    emailjs
      .send(
        "service_y9w0skz",
        "template_1qb1jep",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        "GrsteojKb4xYKQtCs"
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.reset();
        window.history.pushState({}, "", "/");
      })
      .catch((error: string) => {
        console.error("Failed to send message:", error);
        toast.error("An error occurred while sending the message.");
      });
  };

  return (
    <div className="grid grid-cols-2 gap-12 px-4 md:px-10 lg:px-20 pb-20 mt-28 sm:mt-40">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="sm:col-span-1 col-span-2 items-start justify-center flex flex-col gap-4 md:gap-12"
      >
        <span className="md:text-6xl text-3xl font-old-standard font-bold leading-tight dark:invert">
          Get in touch
        </span>
        <span className="md:text-2xl text-lg font-old-standard font-bold leading-tight dark:invert">
          If you have any questions or would like to discuss a project, feel
          free to reach out. I will respond as soon as possible.
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 3, ease: "backOut" }}
        viewport={{ once: true }}
        className="sm:col-span-1 col-span-2 items-center flex flex-col gap-12"
      >
        <Card className="w-full border-black dark:border-white max-w-lg h-full">
          <CardContent className="flex pt-8 justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md dark:invert text-black font-old-standard">
                          First Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-md dark:invert text-black font-old-standard">
                          Last Name
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-md dark:invert text-black font-old-standard">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="..." {...field} />
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
                      <FormLabel className="text-md dark:invert text-black font-old-standard">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-40"
                          placeholder="..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="flex justify-end">
                  <Button type="submit">
                    <span className="font-old-standard text-md font-semibold">
                      Submit
                    </span>
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </motion.div>
      <Toaster position="bottom-right" />
    </div>
  );
}

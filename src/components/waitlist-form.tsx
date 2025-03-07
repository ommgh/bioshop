"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendWaitListEmail } from "@/actions/wailist";
import { toast } from "sonner";

const emailSchema = z.object({
  email: z.string().email(),
});

type FormValues = z.infer<typeof emailSchema>;

export default function WaitlistForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: FormValues) {
    try {
      toast.success("Email sent successfully");
      sendWaitListEmail(values.email);
    } catch {
      toast.error("Failed to send email");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="hello@gmail.com" {...field} />
              </FormControl>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit" className=" w-full">
          Join Waitlist
        </Button>
      </form>
    </Form>
  );
}

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";


const formSchema = z.object({
    name: z.string().min(2, "Full Name is required"),
    email:z.string().email("Invalid email"),
    service:z.string().min(1,"Please select a service"),
    message:z.string().min(10,"Please enter a message"),

});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email:"",
            service:"",
            message:"",
        },
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log("Form submitted:", data);
    };

    return (
        <div className="max-w-lg mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Your full name" {...field} />
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
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Service Needed</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="web">Web Development</SelectItem>
                                        <SelectItem value="mobile">Mobile App</SelectItem>
                                        <SelectItem value="uiux">UI/UX Design</SelectItem>
                                        <SelectItem value="consulting">Consulting</SelectItem>
                                    </SelectContent>
                                </Select>
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
                                    <Textarea placeholder="Type your message here..." className="resize-none" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full rounded-full bg-blue-900 text-white hover:bg-blue-800">
                        Send Message
                    </Button>
                </form>
            </Form>
        </div>

    );
}

export default function Contact() {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
                <ContactForm />
            </div>
        </section>
    );
}
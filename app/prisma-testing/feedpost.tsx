"use client";

import { postFeed } from "@/lib/api-fetch";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";

export const UploadFeed = () => {
  const PostFeedSchema = z.object({
    title: z.string().min(3),
    content: z.string().min(3),
    published: z.preprocess((val) => {
      if (typeof val === "string") {
        return val === "true";
      }
      return val;
    }, z.boolean()),
  });

  type PostFeedSchemaType = z.infer<typeof PostFeedSchema>;
  const form = useForm<PostFeedSchemaType>({
    resolver: zodResolver(PostFeedSchema),
  });

  const onSubmit = async (data: PostFeedSchemaType) => {
    const res = await postFeed(data);
    if (res?.statusText !== "OK") {
      console.log(res);
    }
    alert("Post Submitted Successfully!!");
    form.reset();
  };

  return (
    <>
      <Card className="p-2 border-black dark:border-white w-[350px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Title Input */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Content Input */}
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Content" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Radio Group */}
            <FormField
              control={form.control}
              defaultValue={false}
              name="published"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Want to Publish?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="true" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="false" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button className="mt-3" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      </Card>
    </>
  );
};

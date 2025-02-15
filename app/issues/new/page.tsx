"use client";
import dynamic from "next/dynamic";
import "easymde/dist/easymde.min.css";
import { Button, Spinner, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Taskschema } from "@/app/validationschema";
import { z } from "zod";
import ErrorMessage from "../../components/ErrorMessage";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // Disable server-side rendering for this component
});

type TaskForm = z.infer<typeof Taskschema>;

const NewTaskpage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskForm>({
    resolver: zodResolver(Taskschema),
  });

  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  // ✅ Debugging logs
  useEffect(() => {
    console.log("Form Errors:", errors);
  }, [errors]);

  const onSubmit = async (data: TaskForm) => {
    try {
      setSubmitting(true);
      console.log("Submitting Data:", data); // ✅ Debug form data
      await axios.post("/api/tasks", data);
      router.push("/tasks");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("An unexpected error has occurred.");
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-xl">
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <form className="max-w-xl space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <TextField.Root placeholder="Title" {...register("title")} />
        <ErrorMessage>{errors.title?.message}</ErrorMessage>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              {...field}
              onChange={(value) => field.onChange(value)}
              value={field.value}
              options={{ placeholder: "Description" }}
            />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          Submit New Task
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewTaskpage;

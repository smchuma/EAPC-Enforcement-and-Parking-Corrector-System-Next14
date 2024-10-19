"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FormSuccess } from "../FormSuccess/FormSuccess";
import { FormError } from "../FormError/FormError";
import { Button } from "../ui/button";
import { login } from "@/actions/login";

const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    startTransition(() =>
      login(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })
    );
  };

  return (
    <div className="w-full mt-2">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              placeholder="Enter Email"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.email ? "border-red-500" : ""}
                `}
              {...register("email", { required: true, maxLength: 20 })}
            />
            {errors.email && (
              <span className="text-red-700 text-sm">Email is required</span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="passwordl">Password</Label>
            <Input
              type="password"
              placeholder="Enter Password"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.password ? "border-red-500" : ""}
                `}
              {...register("password", { required: true, maxLength: 20 })}
            />
            {errors.password && (
              <span className="text-red-700 text-sm">Password is required</span>
            )}
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />

          <Button type="submit" disabled={isPending} className="w-full">
            Login
          </Button>

          <h1 className="text-center">Forgot Password</h1>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

"use client";

import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { useState, useTransition } from "react";
import { FormError } from "../FormError/FormError";
import { FormSuccess } from "../FormSuccess/FormSuccess";
import { signup } from "@/actions/signup";

const RegisterForm = () => {
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
      signup(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      })
    );
  };

  return (
    <div className="w-full mt-2">
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="first_name">First Name</Label>
            <Input
              type="text"
              placeholder="Enter First Name"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.first_name ? "border-red-500" : ""}
                `}
              {...register("first_name", { required: true, minLength: 1 })}
            />
            {errors.first_name && (
              <span className="text-red-700 text-sm">
                First Name is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="last_name">Last Name</Label>
            <Input
              type="text"
              placeholder="Enter Password"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.last_name ? "border-red-500" : ""}
                `}
              {...register("last_name", { required: true, maxLength: 20 })}
            />
            {errors.last_name && (
              <span className="text-red-700 text-sm">
                last Name is required
              </span>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="password">Phone Number</Label>
            <Input
              type="text"
              placeholder="Enter Password"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.phone_number ? "border-red-500" : ""}
                `}
              {...register("phone_number", {
                required: true,

                pattern: {
                  value: /^\d+$/,
                  message: "Phone Number must contain only digits",
                },

                minLength: {
                  value: 10,
                  message: "Phone Number must be at least 10 digits",
                },

                valueAsNumber: true,
              })}
            />
            {errors.phone_number && (
              <span className="text-red-700 text-sm">Password is required</span>
            )}
          </div>
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
            <Label htmlFor="password">Password</Label>
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
          <div className="flex flex-col space-y-2">
            <Label htmlFor="role">Role</Label>
            <Input
              type="text"
              placeholder="Enter Password"
              disabled={isPending}
              className={`
                "border border-gray-200"
                ${errors.role ? "border-red-500" : ""}
                `}
              {...register("role", { required: true })}
            />
            {errors.role && (
              <span className="text-red-700 text-sm">Role is required</span>
            )}
          </div>
          <FormSuccess message={success} />
          <FormError message={error} />

          <Button type="submit" disabled={isPending} className="w-full">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;

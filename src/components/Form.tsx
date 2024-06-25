import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input, Button, Label, Text } from '@fluentui/react-components';

import useFormStyles from './FormStyles'

const schema = z.object({
    username: z.string().min(1, { message: "Username is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long" })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"]
});

type FormData = z.infer<typeof schema>;

const RegistrationForm: React.FC = () => {
  const styles = useFormStyles();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.fieldContainer}>
        <Label htmlFor="username">Username</Label>
        <Input id="username" {...register("username")} />
        {errors.username && <Text className={styles.errorMessage}>{errors.username.message}</Text>}
      </div>
      <div className={styles.fieldContainer}>
        <Label htmlFor="email">Email</Label>
        <Input id="email" {...register("email")} />
        {errors.email && <Text className={styles.errorMessage}>{errors.email.message}</Text>}
      </div>
      <div className={styles.fieldContainer}>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <Text className={styles.errorMessage}>{errors.password.message}</Text>}
      </div>
      <div className={styles.fieldContainer}>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && <Text className={styles.errorMessage}>{errors.confirmPassword.message}</Text>}
      </div>
      <Button type="submit" className={styles.button}>Register</Button>
    </form>
  );
};

export default RegistrationForm;

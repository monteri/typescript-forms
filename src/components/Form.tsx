import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Input, Button, Label, Text } from '@fluentui/react-components';
import { useQuery } from 'react-query';

import { fetchPrices } from '../data/api'; // Adjust the import path as necessary
import useFormStyles from './FormStyles';
import { addUserAsync } from "../data/actions";
import { useAppDispatch } from "../hooks";


const schema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters long" })
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type UserData = z.infer<typeof schema>;

const RegistrationForm: React.FC = () => {
  const styles = useFormStyles();
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>({
    resolver: zodResolver(schema),
  });
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useQuery('prices', fetchPrices);
  console.log({ data })

  const onSubmit = (data: UserData) => {
    dispatch(addUserAsync(data));
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading prices</Text>;

  return (
    <div>
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
    </div>
  );
};

export default RegistrationForm;
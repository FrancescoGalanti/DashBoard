import { z } from "zod";

export const menteeFormSchema = z.object({
    name: z.string().trim().min(1, { message: 'Name is required' }).max(100),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string().min(1, { message: 'Phone is required' }),
    city: z.string().min(1, { message: 'City is required' }),
    state: z.string().min(1, { message: 'State is required' }),
    zip: z.string().min(1, { message: 'Zip is required' }),
    street: z.string().min(1, { message: 'Street is required' }),
    notes: z.union([z.literal(''), z.string().trim().max(10000)]),
})


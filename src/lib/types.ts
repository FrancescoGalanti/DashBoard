import { z } from "zod";
import { menteeFormSchema } from "./validation";

export type Mentee = {
    id: number,
    name: string,
    email: string,
    phone: string,
    notes?: string,
    /*  street: string, */
    address: Address
}

export type MenteeEsential = Omit<Mentee, "id">

export type Address = {
    street: string,
    city: string,
    zipcode: string,
    state?: string
}

export type Inputs = z.infer<typeof menteeFormSchema>;
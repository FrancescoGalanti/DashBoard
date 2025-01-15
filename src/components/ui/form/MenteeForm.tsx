import { X } from "lucide-react"
import { useEffect, useRef } from "react"
import Button from "../Button"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { menteeFormSchema } from "../../../lib/validation"
import { Inputs, MenteeEsential } from "../../../lib/types"
import { useMenteeContext } from "../../../lib/hooks/useMenteeContext"

type MenteeFormProps = {
    isVisible: boolean,
    hideModal: () => void,
    actionType?: "add" | "edit"
}


export default function MenteeForm({ isVisible, hideModal, actionType = "add" }: MenteeFormProps) {
    const { addNewMentees, selectedMentee, updateMentess } = useMenteeContext();

    const modalRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if (isVisible) {
            modalRef.current?.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isVisible])


    let defaultValuesObj = {}

    if (selectedMentee && actionType === "edit") {
        const { name, phone, email, address, notes } = selectedMentee;
        defaultValuesObj = {
            name,
            phone,
            email,
            city: address.city,
            street: address.street,
            zip: address.zipcode,
            state: address.state,
            notes
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm<Inputs>({
        resolver: zodResolver(menteeFormSchema),
        defaultValues: defaultValuesObj
    })


    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const newMentess: MenteeEsential = {
            address: {
                street: data.street,
                city: data.city,
                zipcode: data.zip,
                state: data.state
            },
            name: data.name,
            email: data.email,
            phone: data.phone,
            notes: data.notes
        }

        if (actionType === "add") {
            addNewMentees(newMentess)
            reset();

        } else {
            if (selectedMentee) {
                updateMentess(newMentess, selectedMentee.id)
            }
        }

        hideModal();



    }




    return (

        <dialog onClose={hideModal} className="w-full max-w-xl p-4 backdrop:bg-primaryDark/20" ref={modalRef}>
            <div className="flex justify-between mb-4">
                <h1 className="text-black font-bold">{actionType === "add" ? "Add a new " : "Edit "}mentee</h1>
                <form method="dialog">
                    <button><X color="gray" /></button>
                </form>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2" >
                <div>
                    <label className="block font-bold" htmlFor="name">Name</label>
                    <input className="border w-full rounded-sm" id="name" {...register("name")} />
                    {
                        errors.name && (
                            <p className="text-red-900 font-semibold">{errors.name.message}</p>
                        )
                    }
                </div>


                <div>
                    <label className="block font-bold" htmlFor="email">Email</label>
                    <input className="border w-full rounded-sm" id="email" {...register("email")} />
                    {
                        errors.email && (
                            <p className="text-red-900 font-semibold">{errors.email.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="phone">Phone</label>
                    <input className="border w-full rounded-sm" id="phone" {...register("phone")} />
                    {
                        errors.phone && (
                            <p className="text-red-900 font-semibold">{errors.phone.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="street">Street</label>
                    <input className="border w-full rounded-sm" id="street" {...register("street")} />
                    {
                        errors.street && (
                            <p className="text-red-900 font-semibold">{errors.street.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="city">City</label>
                    <input className="border w-full rounded-sm" id="name" {...register("city")} />
                    {
                        errors.city && (
                            <p className="text-red-900 font-semibold">{errors.city.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="state">State</label>
                    <input className="border w-full rounded-sm" id="state"{...register("state")} />
                    {
                        errors.state && (
                            <p className="text-red-900 font-semibold">{errors.state.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="zip">Zip</label>
                    <input className="border w-full rounded-sm" id="zip" {...register("zip")} />
                    {
                        errors.zip && (
                            <p className="text-red-900 font-semibold">{errors.zip.message}</p>
                        )
                    }
                </div>
                <div>
                    <label className="block font-bold" htmlFor="notes">Notes</label>
                    <textarea className="w-full border" id="notes" {...register("notes")}></textarea>
                    {
                        errors.notes && (
                            <p className="text-red-900 font-semibold">{errors.notes.message}</p>
                        )
                    }
                </div>
                <div className="flex flex-row-reverse mt-4">
                    <Button className="px-5 min-w-20 py-2">{actionType === "add" ? "Add a new " : "Edit a "} Mentees</Button>
                </div>
            </form>
        </dialog>
    )


}

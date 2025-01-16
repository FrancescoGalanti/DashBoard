import { useState } from "react";
import { useMenteeContext } from "../../lib/hooks/useMenteeContext";
import Button from "../ui/Button";
import Avatar from "./Avatar";
import SplashScreen from "./SplashScreen";
import MenteeForm from "../ui/form/MenteeForm";

export default function DetailUserCard() {
    const { selectedMentee, removeMentess } = useMenteeContext()
    const [isVisible, setIsVisible] = useState(false);

    function showModal() {
        setIsVisible(true)
    }

    function hideModal() {
        setIsVisible(false);
    }

    if (!selectedMentee) {
        return <SplashScreen />
    }

    return (
        <main className="grid grid-rows-[auto_auto_1fr] h-full">
            <header className="flex justify-between border-b pb-4 border-black/10">
                <div className="flex gap 1 justify-center items-center gap-2">
                    <Avatar name={selectedMentee.name} />
                    <p className="text-black font-bold text-xl">{selectedMentee.name}</p>
                </div>
                <div className="flex justify-between gap-2">
                    <Button onClick={showModal} className="font-bold" variance="outline" >edit</Button>
                    <MenteeForm actionType="edit" isVisible={isVisible} hideModal={hideModal} />
                    <Button className="text-white" onClick={removeMentess}>remove</Button>
                </div>
            </header>
            <section className="flex text-center justify-evenly py-8">
                <div>
                    <h3 className="font-bold">Email</h3>
                    <p>{selectedMentee.email}</p>
                </div>
                <div>
                    <h3 className="font-bold">Phone</h3>
                    <p>{selectedMentee.phone}</p>
                </div>
            </section>
            <section className="grid grid-cols-2 gap-2 *:border *:rounded-md *:p-4">
                <div className="">
                    <h3 className="font-bold">Notes</h3>
                    <p>
                        {
                            selectedMentee.notes?.length === 0 ? "no notes of the selected mentee" : selectedMentee.notes
                        }
                    </p>
                </div>
                <div>
                    <h3 className="font-bold">Adress Info</h3>
                    <ul className="*:grid *:grid-cols-[70px_1fr]" >
                        <li><strong>Street :</strong>{selectedMentee.address.street}</li>
                        <li><strong>City :</strong>{selectedMentee.address.city}</li>
                        <li><strong>State :</strong>{selectedMentee.address.state ?? "No State provided yet"}</li>
                        <li><strong>Zip :</strong>{selectedMentee.address.zipcode}</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

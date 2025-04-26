import { useEffect, useState } from "react";
import axios from "axios";
import mqtt from "mqtt";

export function Notes() {

    const [note, setNote] = useState<string>("");
    const [notes, setNotes] = useState<string[]>([]);

    const client = mqtt.connect(import.meta.env.VITE_MQTT_URL);

    // MQTT setup
    useEffect(() => {

        client.on("connect", () => {
            console.log("MQTT connected (frontend)");
        });

        return () => {
            client.end();
        };
    }, []);

    const handleAddNote = () => {
        if (!note.trim()) return;

        client.publish("/add", note);
        setNotes(prev => [...prev, note]);
        setNote("");
    };

    // Fetch all tasks on initial render
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/fetchalltasks`);
                setNotes(res?.data?.data);
            } catch (err) {
                console.error("Error fetching notes:", err);
            }
        };
        fetchNotes();
    }, []);

    return (
        <section className="w-full flex justify-center items-center h-screen">
            <div className="w-[90%] sm:w-[60%] lg:w-1/3 p-5 border border-slate-200 min-h-[80%] h-[80%] max-h-[80%] bg-white rounded-lg">
                <div className="w-full h-[25%] flex flex-col gap-4">
                    <div className="w-full flex justify-start items-center gap-2">
                        <img src="/notes-icon.png" alt="notes-icon" />
                        <h3 className="font-bold text-xl">Note App</h3>
                    </div>
                    <div className="w-full flex justify-between items-center gap-2">
                        <input
                            type="text"
                            value={note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-[70%] sm:w-[75%] p-1.5 focus:border-slate-300 focus:outline-none rounded-md border border-slate-200"
                            placeholder="New Note..."
                        />
                        <button
                            onClick={handleAddNote}
                            className="w-[30%] sm:w-[25%] p-1.5 active:scale-90 transition-all ease-in delay-100 rounded-md flex justify-center items-center gap-2 bg-amber-900 text-white font-semibold cursor-pointer"
                        >
                            <span className="bg-white rounded-full text-amber-900 w-4 h-4 flex justify-center items-center font-bold pb-1">+</span>
                            Add
                        </button>
                    </div>
                </div>

                <div className="w-full h-[75%] flex flex-col pt-2.5">
                    <p className="text-sm font-bold border-b border-b-slate-400">Notes</p>
                    <div className="w-full h-full whitespace-nowrap overflow-y-auto notes-scrollbar">
                        {notes?.map((item, ind) => (
                            <div key={ind} className={`w-full text-sm ${ind === notes.length - 1 ? "border-0" : "border-b"} border-slate-400 py-2`}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

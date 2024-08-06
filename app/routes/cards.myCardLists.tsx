import { useState } from "react";

let nextId = 0;

export default function CardLists() {
    const [name, setName] = useState('');
    const [pos, setPosition] = useState('');
    const [location, setLocation] = useState('');
    const [desc, setDesc] = useState('');
    const [cards, setCards] = useState([]);

    function handleClickAdd(n, p, l, d) {
        setCards([
            ...cards,
            {
                id: nextId++,
                name: n,
                position: p,
                location: l,
                desc: d
            }
        ]);
    }

    function handleViewCard(card) {
        alert(`Name: ${card.name}\nPosition: ${card.position}\nDescription: ${card.desc}`);
    }

    return (
        <div className="bg-purple-100 p-4">
            <h1 className="text-purple-800">Create Card:</h1>
            <label className="text-purple-700">Name:</label>
            <input
                name="cName"
                className="border border-purple-300 rounded p-1"
                onChange={(e) => setName(e.target.value)}
            /><br />
            <label className="text-purple-700">Position:</label>
            <input
                name="cPosition"
                className="border border-purple-300 rounded p-1"
                onChange={(e) => setPosition(e.target.value)}
            /><br />
            <label className="text-purple-700">Location:</label>
            <input
                name="cLocation"
                className="border border-purple-300 rounded p-1"
                onChange={(e) => setLocation(e.target.value)}
            /><br />
            <label className="text-purple-700">Description:</label>
            <textarea
                name="cDesc"
                rows={4}
                cols={50}
                className="border border-purple-300 rounded p-1"
                onChange={(e) => setDesc(e.target.value)}
            />
            <hr />
            <button 
                onClick={() => handleClickAdd(name, pos, location, desc)} 
                className="border bg-purple-400 hover:bg-purple-500 text-white h-10 w-32 rounded">
                Add Card
            </button>
            <hr />
            <h1 className="text-purple-800">My Card Lists:</h1>
            {cards.length === 0 ? (
                <p>No cards available</p>
            ) : (
                <table className="border-collapse border border-purple-300 w-full mt-4">
                    <thead>
                        <tr>
                            <th className="border border-purple-300 p-2 text-purple-600">ID</th>
                            <th className="border border-purple-300 p-2 text-purple-600">Name</th>
                            <th className="border border-purple-300 p-2 text-purple-600">Position</th>
                            <th className="border border-purple-300 p-2 text-purple-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards.map(card => (
                            <tr key={card.id} className="hover:bg-purple-200">
                                <td className="border border-purple-300 p-2">{card.id + 1}</td>
                                <td className="border border-purple-300 p-2">{card.name}</td>
                                <td className="border border-purple-300 p-2">{card.position}</td>
                                <td className="border border-purple-300 p-2">
                                    <button 
                                        onClick={() => handleViewCard(card)} 
                                        className="border bg-purple-400 hover:bg-purple-500 text-white px-2 py-1 rounded">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

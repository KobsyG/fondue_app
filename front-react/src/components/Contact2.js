import { useState } from "react";
import $ from "jquery";

function Contact2() {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8000/server.php', {
                method: 'POST',
                body: JSON.stringify({ data: 'ulrich' }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.text();


            if (data.includes('5000')) {
                // Handle failure, e.g., display an error message to the user
                console.error('Failed to send the email.');
            } else {
                // Handle success, e.g., display a success message to the user
                console.log('Email sent successfully.');
            }

        } catch (error) {
            console.error('Error from fetch:', error);
        }
    };

    return (
        <div className="bg-slate-300 w-[300px] h-[300px]">
            <form
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) =>
                        handleChange(event)
                    }
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}

export default Contact2;
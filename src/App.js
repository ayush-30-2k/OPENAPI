import React from "react";

function App() {
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        const fetchLocation = async () => {
            await fetch("https://jsonplaceholder.typicode.com/users")
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                    console.log(data);
                });
        };
        fetchLocation();
    }, []);

    if (!data.length) return <div>Loading...</div>
    return (
        <div>
            {
                data.map((item, index) =>
                    <div
                        key={index}
                        style={{
                            marginBottom: '3rem',
                            marginTop: '0.5rem',
                            backgroundColor: 'yellow',
                            padding: '1rem 2rem'
                        }}>
                        <p>NAME: {data[index].name}</p>
                        <p>EMAIL: {data[index].email}</p>
                        <p>PHONE: {data[index].phone}</p>
                        <p>ADDRESS: {data[index].address.street}</p>
                    </div>
                )
            }
        </div>
    );
}

export default App;
import { useState } from "react";
import axios from "axios";

function App() {
  const baseUrl = "http://localhost:8080";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [customerId, setCustomerId] = useState("");
  const [amount, setAmount] = useState("");

  const [bonusId, setBonusId] = useState("");
  const [bonusPoints, setBonusPoints] = useState("");

  const [customers, setCustomers] = useState([]);

  const addCustomer = async () => {
    try {
      await axios.post(`${baseUrl}/customers`, {
        name,
        email,
        totalPoints: 0,
      });

      alert("Customer Added Successfully");

      setName("");
      setEmail("");

      loadCustomers();
    } catch (error) {
      console.error(error);
      alert("Error adding customer");
    }
  };

  const addPurchase = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/customers/${customerId}/purchase?amount=${amount}`
    );

    console.log(response.data);
    alert("Purchase Added Successfully");

    loadCustomers();
  } catch (error) {
    console.log(error);
    console.log(error.response);

    alert(
      error.response?.data?.message ||
      error.response?.status ||
      "Purchase Error"
    );
  }
};

const addBonus = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/customers/${bonusId}/bonus?points=${bonusPoints}`
    );

    console.log(response.data);
    alert("Bonus Added Successfully");

    loadCustomers();
  } catch (error) {
    console.log(error);
    console.log(error.response);

    alert(
      error.response?.data?.message ||
      error.response?.status ||
      "Bonus Error"
    );
  }
};

  const loadCustomers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/customers`);
      setCustomers(response.data);
    } catch (error) {
      console.error(error);
      alert("Error loading customers");
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>Customer Loyalty Points System</h1>

      <hr />

      <h2>Add Customer</h2>

      <input
        type="text"
        placeholder="Customer Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        placeholder="Customer Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addCustomer}>Add Customer</button>

      <hr />

      <h2>Add Purchase</h2>

      <input
        type="number"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Amount Spent"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addPurchase}>Add Purchase</button>

      <hr />

      <h2>Add Bonus Points</h2>

      <input
        type="number"
        placeholder="Customer ID"
        value={bonusId}
        onChange={(e) => setBonusId(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Bonus Points"
        value={bonusPoints}
        onChange={(e) => setBonusPoints(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addBonus}>Add Bonus Points</button>

      <hr />

      <h2>Customer Summary</h2>

      <button onClick={loadCustomers}>Load Customers</button>

      <br />
      <br />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Total Points</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.totalPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
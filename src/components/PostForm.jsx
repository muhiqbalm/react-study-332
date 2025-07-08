import { useEffect, useState } from "react";

export default function CatPage({}) {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedCat, setSelectedCat] = useState(null);

  // Define our async function inside useEffect
  const fetchCats = async () => {
    try {
      setLoading(true); // Show loading state

      // Make the API call
      const response = await fetch(
        "https://64ca45bd700d50e3c7049e2f.mockapi.io/cats"
      );

      // Check if the response is successful
      if (!response.ok) {
        throw new Error("Failed to fetch cats");
      }

      // Convert response to JSON
      const catsData = await response.json();

      // Update our state with the fetched data
      setCats(catsData);
      setError(null); // Clear any previous errors
    } catch (err) {
      // Handle any errors that occurred
      setError(err.message);
      setCats([]); // Clear cats data on error
    } finally {
      // Always stop loading, regardless of success or error
      setLoading(false);
    }
  };

  // useEffect runs when component mounts
  useEffect(() => {
    // Call our fetch function
    fetchCats();
  }, []); // Empty dependency array means this runs once on mount

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://64ca45bd700d50e3c7049e2f.mockapi.io/cats/${selectedCat.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete cat");
      }

      setSelectedCat(null);
      alert("Cat deleted successfully! 🎉");

      fetchCats();
    } catch (err) {
      alert(err);
    }
  };

  // Handle loading state
  if (loading) {
    return <div>Loading cats... ��</div>;
  }

  // Handle error state
  if (error) {
    return <div>Error: {error} ��</div>;
  }

  // Render our cats
  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "0px 48px" }}>
        <h2>Our Cats ({cats.length})</h2>
        {cats.length === 0 ? (
          <p>No cats found ��</p>
        ) : (
          <div>
            {cats.map((cat) => (
              <div key={cat.id}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <h3>{cat.name}</h3>

                  <button
                    disabled={selectedCat}
                    style={{
                      height: "max-content",
                      cursor: selectedCat ? "not-allowed" : "pointer",
                    }}
                    onClick={() => {
                      setSelectedCat(cat);
                    }}
                  >
                    Delete
                  </button>
                </div>
                <p>Breed: {cat.breed}</p>
                <p>Age: {cat.age} years old</p>
                <p>Description: {cat.description}</p>
                <p>Price: $\{cat.price}</p>
                <p>Available: {cat.availability ? "Yes" : "No"}</p>

                {selectedCat && cat.id === selectedCat.id && (
                  <>
                    <hr />
                    <p>Are you sure want to delete this cat data?</p>

                    <div style={{ display: "flex", gap: "8px" }}>
                      <button
                        onClick={handleDelete}
                        style={{ backgroundColor: "red", cursor: "pointer" }}
                      >
                        Delete
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCat(null);
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                    <hr />
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <AddCatForm onCatAdded={fetchCats} />
    </div>
  );
}

function AddCatForm({ onCatAdded, initialValue }) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    description: "",
    price: "",
    imageUrl: "",
    availability: true,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      setLoading(true);
      setError(null);

      // Make POST request to create new cat
      const response = await fetch(
        "https://64ca45bd700d50e3c7049e2f.mockapi.io/cats",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Tell API we're sending JSON
          },
          body: JSON.stringify({
            ...formData,
            age: parseInt(formData.age), // Convert age to number
            price: parseFloat(formData.price), // Convert price to number
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add cat");
      }

      const newCat = await response.json();

      onCatAdded(newCat);

      // Reset form
      setFormData({
        name: "",
        breed: "",
        age: "",
        description: "",
        price: "",
        imageUrl: "",
        availability: true,
      });

      alert("Cat added successfully! 🎉");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3>Add New Cat</h3>

      {error && <div style={{ color: "red" }}>Error: {error}</div>}

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Breed:</label>
        <input
          type="text"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          required
        />
      </div>

      <div>
        <label>Image URL:</label>
        <input
          type="url"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="availability"
            checked={formData.availability}
            onChange={handleChange}
          />
          Available for adoption
        </label>
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Adding Cat..." : "Add Cat"} 🐱
      </button>
    </form>
  );
}

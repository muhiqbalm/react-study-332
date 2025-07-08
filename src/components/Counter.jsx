export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCount = (type = "add") => {
    setCounter(type === "add" ? counter + 1 : counter - 1);
  };

  return <div style={{ display: "flex", flexDirection: "columnt" }}></div>;
}

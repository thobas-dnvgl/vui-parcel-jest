import { Button } from "@veracity/vui";

export function App() {
  return (
    <main>
      <h1>Hello world!</h1>
      <div>
        <Button onClick={() => window.alert("Clicked")}>Click me</Button>
      </div>
    </main>
  );
}

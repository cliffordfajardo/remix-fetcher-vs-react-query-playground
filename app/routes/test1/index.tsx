import { useGetDevices } from "~/hooks";

export default function Index() {
  const devicesQuery = useGetDevices();
  console.log(`devicesQuery.data`, devicesQuery.data);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Test1</h1>
    </div>
  );
}

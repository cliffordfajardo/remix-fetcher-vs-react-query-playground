import { json } from "@remix-run/node";

/**
 * @description
 * API endpoint for getting devices from netcm API: https://netcm-controller.stg.linkedin.com/docs#tag/natMgmt/operation/getDevices
 */
export async function loader() {
  return json([
    { name: "device1" },
    { name: "device2" },
    { name: "device3" },
    { name: "device4" },
  ]);
}

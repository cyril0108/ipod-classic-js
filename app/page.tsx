import { Suspense } from "react";
import { Ipod } from "@/components/Ipod";
import { APPLE_DEVELOPER_TOKEN } from "@/utils/constants/api";

export const revalidate = 3600;

export default function Page() {
  const appleAccessToken = APPLE_DEVELOPER_TOKEN ?? "";

  return (
    <Suspense>
      <Ipod appleAccessToken={appleAccessToken} />
    </Suspense>
  );
}

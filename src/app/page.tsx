import { redirect } from "next/navigation";

export default function Home() {
  redirect("/tech/all-posts");
}

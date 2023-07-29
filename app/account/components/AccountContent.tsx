"use client";

import Button from "@/components/Button";
import usePlayer from "@/hooks/usePlayer";
import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AccountContent = () => {
  const router = useRouter();
  const subscribeModal = useSubscribeModal();
  const { isLoading, user, subscription } = useUser();
  const player = usePlayer();
  const supabaseClient = useSupabaseClient();

  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut();

    player.reset();
    router.push("/");

    if (error) toast.error(error.message);
    else toast.success("Logged Out");
  };

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/");
    }
  }, [isLoading, user, router]);

  const redirectToCustomerPortal = async () => {
    setLoading(true);

    try {
      const { url, error } = await postData({
        url: "api/create-portal-link",
      });

      window.location.assign(url);
    } catch (error) {
      if (error) {
        toast.error((error as Error).message);
      }
    }

    setLoading(false);
  };

  return (
    <div className="mb-7 px-6">
      {!subscription && (
        <div className="flex flex-col gap-y-4">
          <p className="">No active plan</p>
          <Button onClick={subscribeModal.onOpen} className="w-[300px]">
            Subscribe
          </Button>
          <Button
            className="bg-white px-6 py-2 w-[150px]"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
      {subscription && (
        <div className="flex flex-col gap-y-4">
          <p className="">
            You are currently on the{" "}
            <b>{subscription?.prices?.products?.name}</b> plan.
          </p>
          <Button
            className="w-[300px]"
            disabled={loading || isLoading}
            onClick={redirectToCustomerPortal}
          >
            Open customer portal
          </Button>
          <Button
            className="bg-white px-6 py-2 w-[150px]"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountContent;
